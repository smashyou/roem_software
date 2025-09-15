import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, projectDetails, budget, projectType } = body;

    // Validate required fields
    if (!name || !company || !email || !phone || !projectDetails || !budget) {
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
      console.log(`From: ${name} at ${company} <${email}>`);
      console.log(`Project Type: ${projectType || 'Not specified'}`);
      console.log(`Budget: ${budget}`);
      console.log(`Project Details: ${projectDetails}`);
      
      return NextResponse.json(
        { message: 'Inquiry sent successfully' },
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
      subject: `🚀 New Project Inquiry from ${name} at ${company}`,
      html: `
        <h2>🚀 New Project Inquiry</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Contact Information:</strong></p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
        
        <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Project Details:</strong></p>
          <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Budget Range:</strong> ${budget}</p>
        </div>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Project Description:</strong></p>
          <p>${projectDetails.replace(/\n/g, '<br>')}</p>
        </div>
        
        <hr style="margin: 30px 0;">
        <p><small>This inquiry was submitted through the Roem Ventures website project inquiry form.</small></p>
      `,
      text: `
🚀 New Project Inquiry

Contact Information:
Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

Project Details:
Project Type: ${projectType || 'Not specified'}
Budget Range: ${budget}

Project Description:
${projectDetails}

---
This inquiry was submitted through the Roem Ventures website project inquiry form.
      `.trim(),
    });

    console.log('Project inquiry email sent successfully:', info.messageId);
    return NextResponse.json(
      { message: 'Inquiry sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing inquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}