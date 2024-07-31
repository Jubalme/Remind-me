const express = require('express');
const app= express();

require('dotenv').config();

const connectDB=require('./utilities/dbconnection');
connectDB();
const port = process.env.PORT || 4040;
app.use(express.json());
const user= require('./models/loginModel.js');

const final= require('./routes/user_register.js');
//const hey=require('./routes/emailroute');

//const email = require('./routes/emailroute.js');
app.use('/admin', final);
//app.use('/test',hey )
app.post('/api/viewModel',async (req,res)=>{
    try{
      const saved=  await user.create(req.body);
      res.status(200).json(saved);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

//app.use( '/api', email);
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})