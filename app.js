require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use('/', require('./routes/user'));
const server = app.listen(3000, (err) => {
    if(err){
        console.log('Server Crash', err);
    }
    else{
        console.log('Server Up', server.address().port);
    }
})