import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
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

    // Create email content
    const emailContent = `
New Contact Form Submission from ${name}

Contact Email: ${email}

Message:
${message}

---
This message was submitted through the Roem Ventures website contact form.
    `.trim();

    // In a production environment, you would use a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Amazon SES
    // - Resend
    // - Postmark
    
    // For now, we'll simulate the email sending
    console.log('Email would be sent to: info@roemventures.com');
    console.log('Subject: Contact Form Submission');
    console.log('Content:', emailContent);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demonstration, we'll always return success
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