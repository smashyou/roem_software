import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if SMTP credentials are configured
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('SMTP credentials not configured, simulating email send');
      console.log(`Email would be sent to: ${process.env.CONTACT_EMAIL || 'info@roemventures.com'}`);
      console.log(`From: ${firstName} ${lastName} <${email}>`);
      console.log(`Message: ${message}`);
      
      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );
    }

    // Create transporter for PrivateEmail
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // PrivateEmail SMTP server
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your PrivateEmail email address
        pass: process.env.SMTP_PASS, // Your PrivateEmail password
      },
    });

    // Send email using nodemailer
    const info = await transporter.sendMail({
      from: `"Roem Ventures Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'info@roemventures.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This message was submitted through the Roem Ventures website contact form.</small></p>
      `,
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}

Message:
${message}

---
This message was submitted through the Roem Ventures website contact form.
      `.trim(),
    });

    console.log('Email sent successfully:', info.messageId);
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}