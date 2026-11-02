import { ContactFormData } from './validations/contact';

/**
 * Sanitizes user text to prevent stored XSS and HTML injection
 */
export function sanitizeText(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export interface EmailDispatchResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

/**
 * Pluggable Server-Side Email Dispatcher
 * Dispatches verified lead notifications to corporate inquiries inbox.
 */
export async function sendContactNotification(
  data: ContactFormData
): Promise<EmailDispatchResult> {
  const sanitizedName = sanitizeText(data.name);
  const sanitizedEmail = sanitizeText(data.email);
  const sanitizedSubject = sanitizeText(data.subject || 'New Inquiry from RVCR.tech');
  const sanitizedMessage = sanitizeText(data.message);

  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'info@gyatk.com';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'RVCR Inquiries <inquiries@rvcr.tech>';

  if (resendApiKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [recipientEmail],
          reply_to: data.email,
          subject: `[RVCR Lead] ${sanitizedSubject}`,
          html: `
            <h2>New Inquiry Received via RVCR.tech</h2>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Subject:</strong> ${sanitizedSubject}</p>
            <hr />
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
            <hr />
            <small>Submitted at ${new Date().toISOString()}</small>
          `,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[Email Dispatch] Failed to send via Resend:', errorText);
        return { success: false, error: 'Email service rejected request.' };
      }

      const result = await response.json();
      return { success: true, messageId: result.id };
    } catch (err: unknown) {
      console.error('[Email Dispatch] Network error:', err);
      return { success: false, error: 'Network failure during email dispatch.' };
    }
  }

  // Fallback: Safe structured logging in server environment when no API key is mounted
  console.log('----------------------------------------------------');
  console.log('[LEAD DISPATCH] New verified inquiry received:');
  console.log(`- From: ${sanitizedName} <${sanitizedEmail}>`);
  console.log(`- Subject: ${sanitizedSubject}`);
  console.log(`- Message preview: ${sanitizedMessage.slice(0, 100)}...`);
  console.log(`- Time: ${new Date().toISOString()}`);
  console.log('----------------------------------------------------');

  return { success: true, messageId: `mock-${Date.now()}` };
}
