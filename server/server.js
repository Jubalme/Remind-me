const express = require('express');
const app= express();

require('dotenv').config();

const connectDB = require('./utilities/dbconnection');

const port = process.env.PORT || 3000;

app.use(express.json());

connectDB();


const user= require('./models/loginModel.js');

const User= require('./routes/user_auth.js');

app.use('/api/user', User);

app.listen(4545, () => {
    console.log(`Server running on port ${port}`)
})