import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const form = formidable({});
    const [fields] = await form.parse(req);
    const formData = {
      firstName: fields.firstName?.[0] || '',
      lastName: fields.lastName?.[0] || '',
      email: fields.email?.[0] || '',
      phoneNumber: fields.phoneNumber?.[0] || '',
      message: fields.message?.[0] || '',
    };

    const html = `
      <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Segoe UI', sans-serif; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="text-align: center; color: #333;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 40%;">Name:</td>
            <td style="padding: 8px 0;">${formData.firstName} ${formData.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">${formData.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
            <td style="padding: 8px 0;">${formData.phoneNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Message:</td>
            <td style="padding: 8px 0;">${formData.message}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; text-align: center; font-size: 13px; color: #888;">Submitted via Contact-Us Form • VST</p>
      </div>
    `;

    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    const toEmail = process.env.SENDGRID_TO_EMAIL;

    // Debug: Log environment variables (remove in production)
    console.log('Environment variables:', {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY ? 'SET' : 'NOT SET',
      SENDGRID_FROM_EMAIL: fromEmail,
      SENDGRID_TO_EMAIL: toEmail
    });

    if (!fromEmail || !toEmail) {
      return res.status(500).json({ 
        message: 'Missing email configuration in environment variables',
        debug: {
          fromEmail: fromEmail || 'NOT SET',
          toEmail: toEmail || 'NOT SET'
        }
      });
    }

    const msg = {
      to: toEmail,
      from: fromEmail,
      subject: 'New Contact Form Submission',
      html,
    };

    await sgMail.send(msg);

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error.response?.body || error.message);
    return res.status(500).json({ message: 'Failed to send message' });
  }
}
