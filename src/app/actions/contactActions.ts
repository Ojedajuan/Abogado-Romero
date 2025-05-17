
'use server';

import { z } from 'zod';

// Define the schema here as it's used by the server action
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }).optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  // Simulate email sending
  console.log('Contact form submitted:', data);
  // In a real app, you'd integrate with an email service here (e.g., SendGrid, Resend)
  // For now, we'll just simulate a delay and success/failure
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a chance of failure for demonstration
  // if (Math.random() > 0.8) {
  //   return { success: false, message: 'Failed to send message. Please try again later.' };
  // }

  return { success: true, message: 'Your message has been sent successfully. We will get back to you shortly.' };
}
