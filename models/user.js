const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        require: true
    },
    phoneNo:{
        type: String,
        require: true
    },
    lat:{
        type: String
    },
    long:{
        type: String
    },
    password:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('user', userSchema);
