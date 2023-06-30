const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  // Email service - gmail
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_REC,
  subject: 'NodeMailer',
  text: 'Hi Athul!! This is a mail to test to send the mail using nodemailer package'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});