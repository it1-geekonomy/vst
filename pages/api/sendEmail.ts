import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import formidable from 'formidable';
import { promises as fs } from 'fs';

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
    const [fields, files] = await form.parse(req);
    const recaptchaToken = fields.recaptchaToken?.[0] || '';
    if (!recaptchaToken || !(await verifyRecaptcha(recaptchaToken))) {
      return res.status(400).json({ message: 'reCAPTCHA verification failed' });
    }
    const formData = {
      name: fields.name?.[0] || '',
      email: fields.email?.[0] || '',
      mobile: fields.mobile?.[0] || '',
      aboutYourself: fields.aboutYourself?.[0] || '',
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
        <title>New Career Application - VST Group</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden;">
          <!-- Header -->
          <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 600;">VST Group</h1>
            <p style="margin: 10px 0 0; font-size: 16px; opacity: 0.9;">New Career Application</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px;">
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #2c3e50;">
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; width: 40%; border-bottom: 1px solid #e9ecef;">Full Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">${formData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; border-bottom: 1px solid #e9ecef;">Email Address</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                    <a href="mailto:${formData.email}" style="color: #3498db; text-decoration: none;">${formData.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600; border-bottom: 1px solid #e9ecef;">Mobile Number</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                    <a href="tel:${formData.mobile}" style="color: #3498db; text-decoration: none;">${formData.mobile}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; font-weight: 600;">About Candidate</td>
                  <td style="padding: 12px 0;">${formData.aboutYourself}</td>
                </tr>
              </table>
            </div>

            <!-- Submission Details -->
            <div style="background-color: #e8f4fd; padding: 15px; border-radius: 6px; border-left: 4px solid #3498db;">
              <p style="margin: 0; font-size: 14px; color: #2c3e50;">
                <strong>Submitted:</strong> ${formattedDate}<br>
                <strong>Source:</strong> VST Group Careers Portal
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #ecf0f1; padding: 20px; text-align: center; border-top: 1px solid #bdc3c7;">
            <p style="margin: 0; font-size: 13px; color: #7f8c8d;">
              This email was sent from the VST Group careers portal.<br>
              © ${new Date().getFullYear()} VST Group. All rights reserved.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text version for better deliverability
    const text = `
New Career Application - VST Group

Full Name: ${formData.name}
Email: ${formData.email}
Mobile: ${formData.mobile}

About Candidate:
${formData.aboutYourself}

Submitted: ${formattedDate}
Source: VST Group Careers Portal

---
© ${new Date().getFullYear()} VST Group
    `;

    const emailData: any = {
      from: 'VST Group <notifications@vstgroup.com>',
      to: ['careers.web@vstgroup.co.in'],
      subject: `New Career Form Submission - ${formattedDate}`,
      html,
      text, 
      headers: {
        'List-Unsubscribe': '<mailto:unsubscribe@vstgroup.com>',
        'Precedence': 'bulk',
        'X-Auto-Response-Suppress': 'OOF, AutoReply',
        'X-Mailer': 'VST Group Careers Portal',
      },
      reply_to: 'notifications@vstgroup.com',
    };

    const resumeFile = files.resume?.[0];
    if (resumeFile) {
      const content = await fs.readFile(resumeFile.filepath);
      emailData.attachments = [
        {
          filename: resumeFile.originalFilename || 'resume',
          content: content.toString('base64'),
        },
      ];
    }

    const { data, error } = await resend.emails.send(emailData);
    
    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    }

    return res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error: any) {
    console.error('Error processing application:', error);
    return res.status(500).json({ message: 'Failed to process application' });
  }
}
