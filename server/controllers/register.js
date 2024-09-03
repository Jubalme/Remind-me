const model = require('../models/loginModel');
const sendEmail = require('../utilities/sendMail');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

async function signup(req, res) {
    try {
        const { first_name, last_name, username, email, password } = req.body;

        // Validate request fields
        if (!first_name  ||!last_name || !username || !email || !password) {
            res.status(400).json({ message: "All fields are required to be filled." });
            return;
        }

        // Check if user already exists
        const existingUser = await model.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Send OTP to user's email
        const emailResult = await sendEmail(email);
        if (!emailResult) {
            return res.status(500).json({ message: 'Error sending OTP email' });
        }

        const otp = emailResult.otp;
        const otpExpiry = Date.now() + 15 * 60 * 1000; // OTP valid for 15 minutes

        // Store user details in the database
        const user = new model({
            first_name,
            last_name,
            username,
            email,
            password: hashedPassword,
            otp,
            otpExpiry
        });
        await user.save();

        res.status(200).json({ message: 'OTP sent to your email' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

// Handle OTP verification
const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        // Find the user by email
        const user = await model.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if OTP is correct and has not expired
        if (user.otp === otp && user.otpExpiry > Date.now()) {
            // Generate JWT token
            const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

            // Clear OTP and OTP expiry fields
            user.otp = null;
            user.otpExpiry = null;
            await user.save();

            return res.status(200).json({ message: 'OTP verified', token });
        } else {
            return res.status(400).json({ message: 'Invalid OTP or OTP expired' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required to be filled." });
        }

        // Check if user exists
        const user = await model.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    signup,
    login,
    verifyOtp
};