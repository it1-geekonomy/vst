import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import formidable from 'formidable';
import { promises as fs } from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

sgMail.setApiKey("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");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const form = formidable({});
    const [fields, files] = await form.parse(req);
    const formData = {
      name: fields.name?.[0] || '',
      email: fields.email?.[0] || '',
      mobile: fields.mobile?.[0] || '',
      aboutYourself: fields.aboutYourself?.[0] || '',
    };

    const html = `
    <div style="max-width: 600px; margin: auto; padding: 30px; font-family: 'Segoe UI', Arial, sans-serif; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #2c3e50; margin: 0; font-size: 24px; font-weight: 600;">New Career Application</h1>
        <p style="color: #7f8c8d; margin: 10px 0 0; font-size: 16px;">A new candidate has submitted their application</p>
      </div>

      <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #2c3e50;">
          <tr>
            <td style="padding: 12px 0; font-weight: 600; width: 40%; border-bottom: 1px solid #e9ecef;">Full Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">${formData.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; border-bottom: 1px solid #e9ecef;">Email Address</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">${formData.email}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600; border-bottom: 1px solid #e9ecef;">Mobile Number</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">${formData.mobile}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; font-weight: 600;">About Candidate</td>
            <td style="padding: 12px 0;">${formData.aboutYourself}</td>
          </tr>
        </table>
      </div>

      <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e9ecef;">
        <p style="margin: 0; font-size: 13px; color: #95a5a6;">This is an message from VST Careers Portal</p>
        <p style="margin: 5px 0 0; font-size: 12px; color: #bdc3c7;">© ${new Date().getFullYear()} VST.</p>
      </div>
    </div>
  `;
    const msg: any = {
      to: "sachin@geekonomy.in",
      from: "sachin@geekonomy.in",
      subject: 'New Career Form Submission',
      html,
    };
    const resumeFile = files.resume?.[0];
    if (resumeFile) {
      const content = await fs.readFile(resumeFile.filepath);
      msg.attachments = [
        {
          content: content.toString('base64'),
          filename: resumeFile.originalFilename || 'resume',
          type: resumeFile.mimetype,
          disposition: 'attachment',
        },
      ];
    }
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error: any) {
    console.error('Error processing application:', error.response?.body || error.message);
    return res.status(500).json({ message: 'Failed to process application' });
  }
}
