const express = require('express');
const router = express.Router();
const User = require('../models/user');

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
    try{
        const saveUser = await User.findOneAndUpdate(
            {_id: req.params.userId}, 
            { 
                
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                phoneNo: req.body.phoneNo,
                lat: req.body.lat, 
                long: req.body.long 
            }, 
            false);

        res.json(saveUser);
    }catch (err){
        res.json({message: err});
    }
});

module.exports = router;