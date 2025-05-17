
'use server';

import { z } from 'zod';

// Define the schema here as it's used by the server action
const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, ingrese una dirección de correo electrónico válida.' }),
  subject: z.string().min(5, { message: 'El asunto debe tener al menos 5 caracteres.' }).optional(),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
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
  //   return { success: false, message: 'Error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.' };
  // }

  return { success: true, message: 'Su mensaje ha sido enviado exitosamente. Nos pondremos en contacto con usted en breve.' };
}
