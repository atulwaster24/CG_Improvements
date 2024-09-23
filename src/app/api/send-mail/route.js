import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Change this to your email provider if needed
    port: 465,
    secure: true,
    auth: {
      user: 'geetajainoffice@gmail.com',
      pass: 'ttcysklxnmiucfxe'
    },
  });

  // Define the email options
  const mailToSelfOptions = {
    from: 'geetajainoffice@gmail.com',
    to: 'geetajainoffice@gmail.com',
    subject: 'New Contact Form Submission',
    text: `You have a new message from ${name} \n\n (${email}) : \n\nPhone: ${phone} \n\nMessage: ${message}`,
  };

  const mailToClientOptions = {
    from: 'geetajainoffice@gmail.com', // Your email address
    to: email, // Client's email address
    subject: 'Thank you for contacting us!',
    text: `Dear ${name},\n\nThank you for reaching out to Geeta Jain's office. We have received your message and will get back to you soon.\n\nBest regards,\nGeeta Jain Office`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailToSelfOptions);
    await transporter.sendMail(mailToClientOptions);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
  }
}
