const express = require('express');
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
    tls: {
        rejectUnauthorized: false // This line ignores self-signed certificates, adjust as needed for production
    }

});

// Define the sendEmail function
const sendEmail = async (req, res, email) => {
    // const { email } = req.body;

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
        await transporter.sendMail(mailOptions);
        console.log('Email sent to:', email);

        // TODO: Store the OTP securely (e.g., in a database or in-memory store)
        // For testing, you can return the OTP, but remove this in production
        return res.status(200).json({ message: 'Email sent successfully', otp });
    } catch (error) {
        console.error('Error sending email:', error.message);
        return res.status(500).json({ message: 'Error sending email' });
    }
};

module.exports = sendEmail;
