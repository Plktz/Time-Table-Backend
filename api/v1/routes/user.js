const express = require('express');
const routes = express.Router();
const {LOGIN, REGISTER} = require('../../../utils/config/app-constants').ROUTES.USER;
const userController = require('../controllers/user');
routes.post(LOGIN,userController.login);
routes.post(REGISTER,userController.register);
module.exports = routes;