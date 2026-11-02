import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact';
import { checkRateLimit } from '@/lib/rate-limit';
import { sendContactNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // 1. Resolve client IP for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : realIp || '127.0.0.1';

    // 2. Check rate limit: 5 submissions per 10 minutes per IP
    const rateLimit = checkRateLimit(clientIp, { limit: 5, windowMs: 10 * 60 * 1000 });
    if (rateLimit.isRateLimited) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many submissions. Please wait a few minutes before trying again.',
        },
        { status: 429 }
      );
    }

    // 3. Parse JSON body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: 'Invalid JSON request payload.' },
        { status: 400 }
      );
    }

    // 4. Validate with Zod
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const flattenedErrors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: 'Please correct the highlighted errors.',
          fieldErrors: flattenedErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 5. Anti-Spam: Honeypot check (website_hp must be empty)
    if (data.website_hp && data.website_hp.length > 0) {
      // Return 200 to confuse the bot, but do not dispatch
      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been received.',
      });
    }

    // 6. Anti-Spam: Time-to-submit check (bot detection < 1.5s)
    if (data.formRenderTime && Date.now() - data.formRenderTime < 1500) {
      return NextResponse.json(
        {
          success: false,
          message: 'Automated submission detected.',
        },
        { status: 400 }
      );
    }

    // 7. Dispatch Email Notification
    const dispatchResult = await sendContactNotification(data);
    if (!dispatchResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: dispatchResult.error || 'Unable to deliver message at this time.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! Our engineering team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected server error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
