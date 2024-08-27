const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
            console.log("MONGODB connected successfully") ;
    }
    catch(err){
        console.log("MONGODB connection failed",err.message);
        process.exit(1);
    }
};
module.exports=connectDB;