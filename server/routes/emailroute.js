const express = require('express');
const sendEmail  = require('../utilities/sendMail');
const router = express.Router();

router.post('/email', sendEmail);

module.exports = router;