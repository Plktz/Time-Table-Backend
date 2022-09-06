require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use('/user', require('./routes/user'));
app.use('/class', require('./routes/class'));
app.use('/teacher', require('./routes/teacher'));
app.use('/subject', require('./routes/subject'));
app.use('/room', require('./routes/room'));
app.use('/event', require('./routes/event'));

const server = app.listen(3000, (err) => {
    if(err){
        console.log('Server Crash', err);
    }
    else{
        console.log('Server Up', server.address().port);
    }
})