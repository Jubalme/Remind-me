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
    port: process.env.SMTP_PORT || 587, // Default to 587 if port not specified
    secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    },
});

// Define the sendEmail function
const sendEmail = expressAsyncHandler(async (req, res, email) => {
    console.log(email)

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    console.log('Sending OTP to:', email);

    const otp = generateOTP.generate(6, { upperCaseAlphabets: false, specialChars: false });
    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp}.`, 
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        // You should store the OTP in a secure place here (e.g., database or in-memory store) for later verification
        res.status(200).json({ message: 'Email sent successfully', otp }); // Consider removing otp in production
    } catch (error) {
        console.error('Error sending email:', error.message);
        res.status(500).json({ message: 'Error sending email' });
    }
});

module.exports = sendEmail;
