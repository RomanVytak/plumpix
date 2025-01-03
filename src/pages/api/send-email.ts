import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Всі поля обов’язкові.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: 'Повідомлення з сайту PlumPix.io',
      text: `Ім'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: 'Email відправлено!' });
    } catch (error) {
      console.error('Помилка при відправці:', error);
      return res
        .status(500)
        .json({ success: false, message: 'Не вдалося відправити email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res
      .status(405)
      .json({ success: false, message: `Метод ${req.method} не дозволений.` });
  }
}
