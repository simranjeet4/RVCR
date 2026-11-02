import { z } from 'zod';

/**
 * Production Contact Form Validation Schema
 * Validates inputs, prevents malicious injection, and traps automated spam bots.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100, { message: 'Name must not exceed 100 characters.' })
    .regex(/^[\p{L}\s\-'.]+$/u, {
      message: 'Name contains invalid characters.',
    }),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'Please enter a valid email address.' })
    .max(150, { message: 'Email must not exceed 150 characters.' }),

  subject: z
    .string()
    .trim()
    .max(150, { message: 'Subject must not exceed 150 characters.' })
    .optional()
    .or(z.literal('')),

  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters long.' })
    .max(3000, { message: 'Message must not exceed 3000 characters.' }),

  // Anti-Spam: Hidden honeypot field. Must remain empty.
  website_hp: z.string().max(0, { message: 'Spam detected.' }).optional().or(z.literal('')),

  // Anti-Spam: Render timestamp to detect lightning-fast bot submissions (< 2s)
  formRenderTime: z.number().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactFormResponse {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
}
