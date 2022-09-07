require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use('/user', require('./api/v1/routes/user'));
app.use('/class', require('./api/v1/routes/class'));
app.use('/teacher', require('./api/v1/routes/teacher'));
app.use('/subject', require('./api/v1/routes/subject'));
app.use('/room', require('./api/v1/routes/room'));
app.use('/event', require('./api/v1/routes/event'));

const server = app.listen(process.env.PORT, (err) => {
    if(err){
        console.log('Server Crash', err);
    }
    else{
        console.log('Server Up', server.address().port);
    }
})