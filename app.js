
const {USER} = require('./utils/config/app-constants').ROUTES.USER;
const {CLASS} = require('./utils/config/app-constants').ROUTES.CLASS;
const {TEACHER} = require('./utils/config/app-constants').ROUTES.TEACHER;
const {SUBJECT} = require('./utils/config/app-constants').ROUTES.SUBJECT;
const {ROOM} = require('./utils/config/app-constants').ROUTES.ROOM;
const {TIMETABLE} = require('./utils/config/app-constants').ROUTES.TIMETABLE;
const morgan = require('morgan');
const logger= require('./utils/app-logger')(__filename);

require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use(express.static('public/build')); // Static Content
app.use(USER, require('./api/v1/routes/user'));
app.use(CLASS, require('./api/v1/routes/class'));
app.use(TEACHER, require('./api/v1/routes/teacher'));
app.use(SUBJECT, require('./api/v1/routes/subject'));
app.use(ROOM, require('./api/v1/routes/room'));
app.use(TIMETABLE, require('./api/v1/routes/timetable'));


const server = app.listen(process.env.PORT, (err) => {
    if(err){
        console.log('Server Crash', err);
    }
    else{
        console.log('Server Up', server.address().port);
    }
})