const express = require('express');
const routes = express.Router();
const {CREATE} = require('../../../utils/config/app-constants').ROUTES.TIMETABLE;
const controller = require('../controllers/timetable');
routes.post(CREATE, controller.create);
module.exports = routes;