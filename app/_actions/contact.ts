'use server';
import { z } from 'zod';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import { ContactFormSchema } from '@/lib/validations/contact';
import { getErrorMessage, getZodErrorMessage } from '@/lib/utils';
import { env } from '@/env.mjs';

const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmailAction(
  rawData: z.infer<typeof ContactFormSchema>
) {
  const zodResult = ContactFormSchema.safeParse(rawData);
  if (!zodResult.success) {
    return {
      error: `sendEmailAction ${getZodErrorMessage(zodResult)}`,
      data: null,
    };
  }
  const { name, email, message } = zodResult.data;

  try {
    const data = await resend.emails.send({
      from: 'Portfolio <portfolio@aththariq.com>',
      to: ['farhanaziz422@gmail.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message }),
    });
    return { data, error: null };
  } catch (error) {
    return {
      error: `sendEmailAction ${getErrorMessage(error)}`,
      data: null,
    };
  }
}
