'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitForm(prevState, formData) {
    if (!formData) {
        return { success: false, error: 'No form data received' };
    }

    const name = formData.get('name');
    const mobile = formData.get('mobile');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Basic validation
    if (!name || !mobile || !email || !message) {
        return { success: false, error: 'All fields are required' };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { success: false, error: 'Invalid email address' };
    }

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'ganesh@onetekus.com', // Replace with your email
            subject: `Ticket: ${name} + ${mobile} + ${subject}`,
            html: `
        <h1>Ticket: ${name} + ${mobile} + ${subject} </h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
        });

        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Failed to send message. Please try again later.' };
    }
}

