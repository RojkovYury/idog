/*

import nodemailer from 'nodemailer';

interface sendMailProps {
  email: string;
  text: string;
}

const sendMail = (props: sendMailProps) => {

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
    text: `Заявка с сайта.
            Почта: ${props.email};
            Сообщение: ${props.text};
        `
  };

  async function main() {
    const info = await transporter.sendMail({
      from: 'idogpost@mail.ru',
      to: 'rojkov.yury@gmail.com',
      subject: 'Заявка с сайта',
      text: `Заявка с сайта.
              Почта: ${props.email};
              Сообщение: ${props.text};
          `
    });
  
    console.log("Message sent: %s", info.messageId);
  }

  export { sendMail }



  // eslint-disable-next-line no-undef
  return new Promise(((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  }));

};

*/
