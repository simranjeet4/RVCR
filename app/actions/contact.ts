'use server';

import { contactFormSchema, ContactFormResponse } from '@/lib/validations/contact';
import { checkRateLimit } from '@/lib/rate-limit';
import { sendContactNotification } from '@/lib/email';
import { headers } from 'next/headers';

/**
 * Server Action for Contact Form Submission
 */
export async function submitContactAction(
  prevState: ContactFormResponse | null,
  formData: FormData
): Promise<ContactFormResponse> {
  try {
    // 1. IP resolution
    const headerList = headers();
    const forwardedFor = headerList.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    // 2. Rate limiting
    const rateLimit = checkRateLimit(clientIp, { limit: 5, windowMs: 10 * 60 * 1000 });
    if (rateLimit.isRateLimited) {
      return {
        success: false,
        message: 'Too many submissions. Please wait a few minutes before trying again.',
      };
    }

    // 3. Extract form fields
    const rawData = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      subject: formData.get('subject')?.toString() || '',
      message: formData.get('message')?.toString() || '',
      website_hp: formData.get('website_hp')?.toString() || '',
      formRenderTime: Number(formData.get('formRenderTime')) || 0,
    };

    // 4. Validate with Zod
    const validationResult = contactFormSchema.safeParse(rawData);
    if (!validationResult.success) {
      return {
        success: false,
        message: 'Please correct the highlighted errors.',
        fieldErrors: validationResult.error.flatten().fieldErrors,
      };
    }

    const data = validationResult.data;

    // 5. Honeypot check
    if (data.website_hp && data.website_hp.length > 0) {
      return {
        success: true,
        message: 'Your inquiry has been received.',
      };
    }

    // 6. Time-to-submit bot check
    if (data.formRenderTime && Date.now() - data.formRenderTime < 1500) {
      return {
        success: false,
        message: 'Automated submission detected.',
      };
    }

    // 7. Dispatch email
    const dispatchResult = await sendContactNotification(data);
    if (!dispatchResult.success) {
      return {
        success: false,
        message: dispatchResult.error || 'Failed to dispatch message.',
      };
    }

    return {
      success: true,
      message: 'Thank you for your message! Our engineering team will contact you shortly.',
    };
  } catch (err: unknown) {
    console.error('[Submit Contact Action Error]:', err);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
