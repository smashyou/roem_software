import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, projectDetails, budget } = body;

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

    // Create email content
    const emailContent = `
New Project Inquiry from ${name}

Company: ${company}
Contact Email: ${email}
Phone: ${phone}
Budget Range: ${budget}

Project Details:
${projectDetails}

---
This inquiry was submitted through the Roem Ventures website.
    `.trim();

    // In a production environment, you would use a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Amazon SES
    // - Resend
    // - Postmark
    
    // For now, we'll simulate the email sending
    // You'll need to implement the actual email service
    
    console.log('Email would be sent to: info@roemventures.com');
    console.log('Subject: Project Inquiry');
    console.log('Content:', emailContent);

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demonstration, we'll always return success
    // In production, you'd handle actual email service responses
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