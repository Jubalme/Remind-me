const express = require('express');
const router= express.Router();
const {signup, login, verifyOtp}=require('../controllers/register.js' )

router.post('/signup',signup);
router.post('/login',login);
router.post('/verify',verifyOtp);



module.exports=router;