const express = require('express');
const router = express.Router();
const User = require('../models/user');
const statusReturn = require('../models/statusReturn');

// login with email and password
router.get('/:param1/:param2/:key', async (req, res) => {

    const returnStatus = new statusReturn();


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
           
            let finalPassword = password;
            // let passBuf = new Buffer(password, 'base64')
            // let passwordTxt = passBuf.toString('ascii');
            // let passBuf1 = new Buffer(passwordTxt, 'base64')
            // let finalPassword = passBuf1.toString('ascii');
            console.log(finalPassword);
    
            const userLogin = await User.find({email: emailTxt})
            
            if(userLogin.length > 0){
                console.log(userLogin[0].password);
                if(finalPassword == userLogin[0].password){
                    returnStatus.statusCode = "999";
                    returnStatus.message = "complete";
                    returnStatus.description = "Email : " + emailTxt + " Password : " + finalPassword;

                    res.json(returnStatus);
                }else{
                    returnStatus.statusCode = "200";
                    returnStatus.message = "error";
                    returnStatus.description = "Password is invalid!";

                    res.json(returnStatus);
                }
            }else{
                returnStatus.statusCode = "200";
                returnStatus.message = "error";
                returnStatus.description = "Email is invalid!";

                res.json(returnStatus);
            }
        }else{
            returnStatus.statusCode = "300";
            returnStatus.message = "error";
            returnStatus.description = "Parameter is invalid!";

            res.json(returnStatus);
        }
        
    }catch (err){
        res.json({message: err});
    }
});

module.exports = router;