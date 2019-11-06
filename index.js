const express = require('express');
const mongodb = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config');
const regisRoute = require('./routes/registration');
const authenRoute = require('./routes/authentication')
const profileRoute = require('./routes/profileInformation');

app.use(bodyParser.json());
app.use('/register', regisRoute);
app.use('/authentication', authenRoute);
app.use('/profile', profileRoute);

// Home screen 
app.get('/', (req, res)=> {
    res.send('Welcome To Sample API by Hariluk.F')
})

mongodb.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },() => {})
    .then(() => console.log('Database is already connected!'))
    .catch(err => {
        console.log({message: err});
    });

// how to we start listening to server
app.listen(3000);