const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const generateOTP = require('otp-generator');
dotenv.config();

const app = express();
app.use(express.json()); // Add this line to parse JSON request bodies

// Configure nodemailer transporter
let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT || 465, 
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

// Define the sendEmail function
const sendEmail = expressAsyncHandler(async (req, res) => {
    const { email } = req.body;
    console.log(email);

    const otp = generateOTP.generate(6, { upperCaseAlphabets: false, specialChars: false });
    var mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: "SENDING OTP",
        text:` You OTP is: ${otp}`, 
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending email' });
    }
});

app.post('/send-email', sendEmail);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = sendEmail;