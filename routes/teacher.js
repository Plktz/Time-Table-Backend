const express = require('express');
const routes = express.Router();
const controller = require('../controllers/teacher');
const basic_routes = require("./util/element");
basic_routes(controller, routes);
module.exports = routes;