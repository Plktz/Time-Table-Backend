const operations = require("../db/repository/event_operations");
const basic_controller = require("./util/element")(operations);
const controller = basic_controller;

module.exports = controller;