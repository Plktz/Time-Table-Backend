const express = require('express');
const routes = express.Router();
const controller = require('../controllers/class');
const basic_routes = require("./util/element");
basic_routes(controller, routes);
module.exports = routes;