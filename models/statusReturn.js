const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
    statusCode:{
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    },
    description:{
        type: String
    }
});

module.exports = mongoose.model('status', statusSchema);
