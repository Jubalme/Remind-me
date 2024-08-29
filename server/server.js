const express = require('express');
const app= express();

require('dotenv').config();

const cors = require ('cors');

const connectDB = require('./utilities/dbconnection');

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Allow cookies to be sent with requests
    secure: false
}));

connectDB();

const User= require('./routes/user_auth.js');

app.use('/api/user',User);


app.listen(4545, () => {
    console.log(`Server running on port ${port}`)
})