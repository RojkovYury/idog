import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function sendEmailHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { email, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'idogpost@mail.ru',
        pass: 'aUqaFL85MSvc1x7mXSiq'
      }
    });

    const mailOptions = {
      from: 'idogpost@mail.ru',
      to: 'rojkov.yury@gmail.com',
      subject: 'Заявка с сайта',
      text: `Заявка с сайта. Почта: ${email}; Сообщение: ${message}`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Сообщение успешно отправлено' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при отправке сообщения' });
  }
}