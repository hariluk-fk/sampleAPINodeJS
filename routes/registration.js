const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
    // user = req.body;

    let pass = req.body.password;
    let passBuf = new Buffer(pass);
    let base64pass = passBuf.toString('base64');
    let passBuf1 = new Buffer(base64pass);
    let finalPass = passBuf1.toString('base64')

    const user = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        phoneNo: req.body.phoneNo,
        lat: req.body.lat, 
        long: req.body.long,
        password: finalPass
    });

    try{
        const saveUser = await user.save();
        returnStatus.statusCode = "999";
        returnStatus.message = "complete";res.json(saveUser);
    }catch(err){
        res.json({message: err});
    }
    
    
});

module.exports = router;