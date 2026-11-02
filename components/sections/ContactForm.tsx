'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { contactFormSchema } from '@/lib/validations/contact';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website_hp: '', // Honeypot field
  });

  const [formRenderTime, setFormRenderTime] = useState<number>(0);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    // Record client timestamp for bot speed trap
    setFormRenderTime(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError(null);
    setSuccessMessage(null);
    setFieldErrors({});

    // 1. Client-Side Zod Validation
    const clientValidation = contactFormSchema.safeParse({
      ...formData,
      formRenderTime,
    });

    if (!clientValidation.success) {
      const flattened = clientValidation.error.flatten().fieldErrors;
      const formattedErrors: Record<string, string> = {};
      for (const [key, messages] of Object.entries(flattened)) {
        if (messages && messages.length > 0) {
          formattedErrors[key] = messages[0];
        }
      }
      setFieldErrors(formattedErrors);
      setGeneralError('Please correct the highlighted fields before submitting.');
      return;
    }

    // 2. Submit to Protected Route Handler
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formRenderTime,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.fieldErrors) {
          const serverErrors: Record<string, string> = {};
          for (const [key, messages] of Object.entries(result.fieldErrors)) {
            if (Array.isArray(messages) && messages.length > 0) {
              serverErrors[key] = messages[0];
            }
          }
          setFieldErrors(serverErrors);
        }
        setGeneralError(result.message || 'An error occurred while sending your message.');
        setIsSubmitting(false);
        return;
      }

      // Success
      setSuccessMessage(result.message || 'Thank you! Your inquiry has been transmitted successfully.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        website_hp: '',
      });
      setIsSubmitting(false);
    } catch {
      setGeneralError('Unable to connect to the server. Please check your network connection.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 py-4">
      <div>
        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Contact us
        </h3>
        <p className="text-sm text-pink-100 mt-2 max-w-xl font-light">
          We operate from our base in UK and India. For more information, please drop us a mail or use the form.
        </p>
      </div>

      {/* Success Notification */}
      {successMessage && (
        <div
          role="alert"
          aria-live="polite"
          className="p-4 rounded-xl bg-white text-emerald-800 flex items-start gap-3 shadow-lg border border-emerald-100 transition-all"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h4 className="text-sm font-bold text-emerald-900">Message Delivered</h4>
            <p className="text-xs text-emerald-700 mt-0.5">{successMessage}</p>
          </div>
        </div>
      )}

      {/* Error Alert Banner */}
      {generalError && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 rounded-xl bg-rose-950/90 text-white flex items-start gap-3 border border-rose-800/80 shadow-lg"
        >
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h4 className="text-sm font-bold text-rose-200">Submission Error</h4>
            <p className="text-xs text-rose-300 mt-0.5">{generalError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Anti-Spam Honeypot Field (Invisible to human users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website_hp">Do not fill this field</label>
          <input
            type="text"
            id="website_hp"
            name="website_hp"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website_hp}
            onChange={handleChange}
          />
        </div>

        {/* Name Field */}
        <div>
          <label
            htmlFor="contact-name"
            className="block text-xs uppercase tracking-wider text-white font-semibold mb-1"
          >
            Your name <span className="text-pink-300">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Dr. John Doe"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
            className={`w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 shadow-inner transition-colors ${
              fieldErrors.name
                ? 'ring-2 ring-rose-400 border-rose-400'
                : 'focus:ring-[#00a9ea]'
            }`}
          />
          {fieldErrors.name && (
            <p id="contact-name-error" className="text-xs text-pink-200 mt-1 font-medium">
              {fieldErrors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs uppercase tracking-wider text-white font-semibold mb-1"
          >
            Your email <span className="text-pink-300">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="j.doe@company.com"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
            className={`w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 shadow-inner transition-colors ${
              fieldErrors.email
                ? 'ring-2 ring-rose-400 border-rose-400'
                : 'focus:ring-[#00a9ea]'
            }`}
          />
          {fieldErrors.email && (
            <p id="contact-email-error" className="text-xs text-pink-200 mt-1 font-medium">
              {fieldErrors.email}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="contact-subject"
            className="block text-xs uppercase tracking-wider text-white font-semibold mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Technology Licensing & OEM Evaluation"
            className="w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 focus:ring-[#00a9ea] shadow-inner"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs uppercase tracking-wider text-white font-semibold mb-1"
          >
            Your message <span className="text-pink-300">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail your commercial application, target power rating (e.g., 450-600 HP), and proposed timeline..."
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
            className={`w-full px-4 py-3 rounded bg-white text-[#1e293b] text-sm focus:outline-none focus:ring-2 shadow-inner transition-colors resize-y ${
              fieldErrors.message
                ? 'ring-2 ring-rose-400 border-rose-400'
                : 'focus:ring-[#00a9ea]'
            }`}
          />
          {fieldErrors.message && (
            <p id="contact-message-error" className="text-xs text-pink-200 mt-1 font-medium">
              {fieldErrors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-2.5 bg-[#1379FF] hover:bg-blue-600 text-white font-semibold text-xs rounded-none shadow transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" aria-hidden="true" />
                <span>Sending...</span>
              </>
            ) : (
              <span>Submit</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
