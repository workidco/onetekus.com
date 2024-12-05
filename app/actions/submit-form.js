'use server'

import resend from '../lib/resend';

export async function submitForm(formData) {
    const name = formData.get('name');
    const mobile = formData.get('mobile');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Basic validation
    if (!name || !mobile || !email || !subject || !message) {
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
            subject: 'New Contact Form Submission',
            html: `
        <h1>New Contact Form Submission</h1>
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

