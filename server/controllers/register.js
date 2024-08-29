const model = require('../models/loginModel')
const send=require('../utilities/sendMail')


async function signup(req, res) {
    try {
        const { first_name, last_name, username, email, password } = req.body;
        if (!first_name || !last_name || !username || !email || !password) {
            res.status(400);
            console.log(data)
            res.send("All fields are required to be filled.");

        }
        else {

            send(email);

            send
            res.status(200);
            res.send(username + " " + " welcome to your remind_me");
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

function login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400);
        res.send("All fields are required to be filled.");
    }
    else {
        res.send(username + " " + "welcome to your remind_me");
    }
}


module.exports = {
    signup,
    login
};