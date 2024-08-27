const express = require('express');
const router= express.Router();

const signup=require('../controllers/register.js' )
const emails=require('./emailroute.js')
router.post('/signup',signup);
// router.get('/emailsend',emails);



module.exports=router;