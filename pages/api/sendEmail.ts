import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
import formidable from 'formidable';
import { promises as fs } from 'fs';

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
    const [fields, files] = await form.parse(req);
    const formData = {
      name: fields.name?.[0] || '',
      email: fields.email?.[0] || '',
      mobile: fields.mobile?.[0] || '',
      experience: fields.experience?.[0] || '',
      currentJobTitle: fields.currentJobTitle?.[0] || '',
      preferredRole: fields.preferredRole?.[0] || '',
      skills: fields.skills?.[0] || '',
      industries: fields.industries?.[0] || '',
      startDate: fields.startDate?.[0] || '',
      noticePeriod: fields.noticePeriod?.[0] || '',
    };

    const html = `
    <div style="max-width: 600px; margin: auto; padding: 20px; font-family: 'Segoe UI', sans-serif; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
      <h2 style="text-align: center; color: #333;">New Career Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr>
          <td style="padding: 8px 0; font-weight: bold; width: 40%;">Name:</td>
          <td style="padding: 8px 0;">${formData.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Email:</td>
          <td style="padding: 8px 0;">${formData.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Mobile:</td>
          <td style="padding: 8px 0;">${formData.mobile}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Experience:</td>
          <td style="padding: 8px 0;">${formData.experience} Years</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Current Job Title:</td>
          <td style="padding: 8px 0;">${formData.currentJobTitle}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Preferred Role:</td>
          <td style="padding: 8px 0;">${formData.preferredRole}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Skills:</td>
          <td style="padding: 8px 0;">${formData.skills}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Industries:</td>
          <td style="padding: 8px 0;">${formData.industries}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Start Date:</td>
          <td style="padding: 8px 0;">${formData.startDate}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: bold;">Notice Period:</td>
          <td style="padding: 8px 0;">${formData.noticePeriod}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; text-align: center; font-size: 13px; color: #888;">Submitted via Career Form • VST</p>
    </div>
  `;
    const msg: any = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
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
