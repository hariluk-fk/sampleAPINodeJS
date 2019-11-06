const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
    // user = req.body;
    const user = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        gender: req.body.gender,
        phoneNo: req.body.phoneNo,
        lat: req.body.lat, 
        long: req.body.long
    });

    try{
        const saveUser = await user.save();
        res.json(saveUser);
    }catch(err){
        res.json({message: err});
    }
    
    
});

module.exports = router;