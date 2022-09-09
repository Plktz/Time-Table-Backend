
const {USER} = require('./utils/config/app-constants').ROUTES.USER;
const {CLASS} = require('./utils/config/app-constants').ROUTES.CLASS;
const {TEACHER} = require('./utils/config/app-constants').ROUTES.TEACHER;
const {SUBJECT} = require('./utils/config/app-constants').ROUTES.SUBJECT;
const {ROOM} = require('./utils/config/app-constants').ROUTES.ROOM;
const morgan = require('morgan');
const logger= require('./utils/app-logger')(__filename);

require('dotenv').config();
const timetable_operations = require('./db/repository/timetable_operations');

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

app.use(USER, require('./api/v1/routes/user'));
app.use(CLASS, require('./api/v1/routes/class'));
app.use(TEACHER, require('./api/v1/routes/teacher'));
app.use(SUBJECT, require('./api/v1/routes/subject'));
app.use(ROOM, require('./api/v1/routes/room'));

// console.log(timetable_operations.create({
//     "userid": "6314ba0dbb704d10072e1aa4",
//     "periods": 7,
//     "days":["monday", "tuesday", "wednesday"]
// }));

const server = app.listen(process.env.PORT, (err) => {
    if(err){
        console.log('Server Crash', err);
    }
    else{
        console.log('Server Up', server.address().port);
    }
})