const operations = require("../../../db/repository/subject_operations");
const teacher_operations = require("../../../db/repository/teacher_operations");
const class_operations = require("../../../db/repository/class_operations");
const mongoose = require("mongoose");
const basic_controller = require("./util/element")(operations);
const controller = basic_controller;

controller.add = async (req, res) => {

    const object = req.body;
    const class_object = await class_operations.find({userid:object.userid, name: object.class});
    const teacher_object = await teacher_operations.find({userid:object.userid, name: object.teacher});
    object.class = class_object._id;
    object.teacher = teacher_object._id;
    
    const result = await operations.add(object);
    if (result && result.userid) {
      res.json({ message: "Record Added" });
    } else {
      res.json({ message: "Record not Added..." });
    }
}

module.exports = controller;
