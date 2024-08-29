const otp_generator=require("otp-generator");

const generateOTP=()=>{
    const OTP=otp_generator.generate(6,{
        upperCaseAlphabets:false,
        specialChars: false,
    });
    return OTP;
}

module.exports=generateOTP();