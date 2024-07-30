const express = require('express');
const app= express();

require('dotenv').config();

//const connectDB=require('./utilities/dbconnection');
//connectDB();
const port = process.env.PORT || 4040;
app.use(express.json());


const final= require('./routes/user_register.js');
const hey=require('./routes/emailroute');

const email = require('./routes/emailroute.js');
app.use('/admin', final);
app.use('/test',hey )

app.use( '/api', email);
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})