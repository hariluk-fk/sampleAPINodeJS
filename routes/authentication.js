const express = require('express');
const router = express.Router();
const User = require('../models/user');

// login with email and password
router.get('/:param1/:param2/:key', async (req, res) => {
    try{
        let paramChk = true;
        let email = "";
        let password = "";
        let key = req.params.key;
       
        let keyBuf = new Buffer(key, 'base64')
        let keyTxt = keyBuf.toString('ascii');

        if(keyTxt == "ep"){
            email = req.params.param1;
            password= req.params.param2;
        }else if(keyTxt == "pe"){
            email = req.params.param2;
            password = req.params.param1;
        }else{
            paramChk = false;
        }

        if(paramChk == true){
            let emailBuf = new Buffer(email, 'base64')
            let emailTxt = emailBuf.toString('ascii');
            let passBuf = new Buffer(password, 'base64')
            let passwordTxt = passBuf.toString('ascii');
    
            const userLogin = await User.find({email: emailTxt})
            if(userLogin.length > 0){
                if(passwordTxt == "init@1234"){
                    res.json("Email : " + emailTxt + " Password : " + passwordTxt)
                }else{
                    res.json("Password is invalid!")
                }
            }else{
                res.json("Email is invalid!");
            }
        }else{
            res.json("Parameters are invalid!");
        }
        
    }catch (err){
        res.json({message: err});
    }
});

module.exports = router;