import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.ipage.com', //smtp host
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,

    }
});

export default transporter;
