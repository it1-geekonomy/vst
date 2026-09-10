import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

const resend = new Resend('re_UAuQVvJD_Hy72u8ZJoWHm9KzWtuEss2GT');
const RECAPTCHA_SECRET_KEY = '6Lfx6rMtAAAAADWs1QGRHdD5znLlvRoQxLsLPUQ_';

async function verifyRecaptcha(token: string) {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: RECAPTCHA_SECRET_KEY,
      response: token,
    }),
  });
  const data = await response.json();
  return data.success === true;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const form = formidable({});
    const [fields] = await form.parse(req);
    const recaptchaToken = fields.recaptchaToken?.[0] || '';
    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }
    const formData = {
      firstName: fields.firstName?.[0] || '',
      lastName: fields.lastName?.[0] || '',
      email: fields.email?.[0] || '',
      phoneNumber: fields.phoneNumber?.[0] || '',
      message: fields.message?.[0] || '',
    };

    const formattedDate = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    // Improved HTML with better structure and deliverability
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden;">
          <!-- Header -->
          <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">VST Group</h1>
            <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">New Contact Form Submission</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px;">
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #2c3e50;">
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; width: 35%; border-bottom: 1px solid #e9ecef;">Full Name:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">${formData.firstName} ${formData.lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; border-bottom: 1px solid #e9ecef;">Email Address:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                    <a href="mailto:${formData.email}" style="color: #3498db; text-decoration: none;">${formData.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; border-bottom: 1px solid #e9ecef;">Phone Number:</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                    <a href="tel:${formData.phoneNumber}" style="color: #3498db; text-decoration: none;">${formData.phoneNumber}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600;">Message:</td>
                  <td style="padding: 12px 0;">${formData.message}</td>
                </tr>
              </table>
            </div>
            
            <!-- Submission Details -->
            <div style="background-color: #e8f4fd; padding: 15px; border-radius: 6px; border-left: 4px solid #3498db;">
              <p style="margin: 0; font-size: 14px; color: #2c3e50;">
                <strong>Submitted:</strong> ${formattedDate}<br>
                <strong>Source:</strong> VST Group Contact Form
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #ecf0f1; padding: 20px; text-align: center; border-top: 1px solid #bdc3c7;">
            <p style="margin: 0; font-size: 13px; color: #7f8c8d;">
              This email was sent from the VST Group website contact form.<br>
              © ${new Date().getFullYear()} VST Group. All rights reserved.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text version for better deliverability
    const text = `
New Contact Form Submission - VST Group

Full Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phoneNumber}

Message:
${formData.message}

Submitted: ${formattedDate}
Source: VST Group Contact Form

---
© ${new Date().getFullYear()} VST Group
    `;

    const fromEmail = "notifications@vstgroup.com";
    const toEmail = "mdoffice@vstsons.in";

    if (!fromEmail || !toEmail) {
      return res.status(500).json({
        message: 'Missing email configuration in environment variables',
        debug: {
          fromEmail: fromEmail || 'NOT SET',
          toEmail: toEmail || 'NOT SET'
        }
      });
    }
    const emailData = {
      from: `VST Group <${fromEmail}>`,
      to: [toEmail],
      subject: `New Contact Form Submission - ${formattedDate}`,
      html,
      text, 
      headers: {
        'List-Unsubscribe': '<mailto:unsubscribe@vstgroup.com>',
        'Precedence': 'bulk',
        'X-Auto-Response-Suppress': 'OOF, AutoReply',
        'X-Mailer': 'VST Group Contact Form',
      },
      reply_to: fromEmail,
    };

    const { data, error } = await resend.emails.send(emailData);
    
    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    }

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send message' });
  }
}
