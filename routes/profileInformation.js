const express = require('express');
const router = express.Router();
const User = require('../models/user');
const statusReturn = require('../models/statusReturn');

// get all user
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch (err){
        res.json({message: err});
    }
});


// edit information
router.post('/:userId', async (req, res) => {
    const returnStatus = new statusReturn();

    let userId = req.params.userId;   
    let userIdBuf = new Buffer(userId, 'base64');
    let userIdTxt = userIdBuf.toString('ascii');
    
    // console.log(req.body.password);
    let pass = req.body.password;
    let passBuf = new Buffer(pass);
    let base64pass = passBuf.toString('base64');
    let passBuf1 = new Buffer(base64pass);
    let finalPass = passBuf1.toString('base64')

    try{
        const saveUser = await User.findOneAndUpdate(
            {_id: userIdTxt}, 
            { 
                
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                phoneNo: req.body.phoneNo,
                lat: req.body.lat, 
                long: req.body.long,
                password: finalPass 
            }, 
            false);
            returnStatus.statusCode = "999";
            returnStatus.message = "complete";

            res.json(returnStatus);
    }catch (err){
        res.json({message: err});
    }
});

module.exports = router;