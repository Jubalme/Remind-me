
function signup=async (req ,res )=>{
    try{
        const {username,password,email,first_name,last_name}=req.body;
        if(!username|| !password|| !email ||!first_name|| !last_name){
            res.status(400);
            res.send("All fields are required to be filled.");
            const model= require('../models/loginModel.js')
        }
        else{
            res.status(200);
            res.send( username+ " "+ " welcome to your remind_me");
        }
      }
      catch(error){
          res.status(500).json({message: error.message});
      }
};

function login(req,res){
    const {username,password}=req.body;
    if(!username||!password){
        res.status(400);
        res.send("All fields are required to be filled.");
    }
    else{
        res.send(username+" "+ "welcome to your remind_me");
    }
}


module.exports={
    signup,
    login
};