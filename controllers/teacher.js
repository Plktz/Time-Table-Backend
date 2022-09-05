const operations = require("../db/repository/teacher_operations");
const basic_controller = require("./util/element")(operations);
const controller = basic_controller;

module.exports = controller;
