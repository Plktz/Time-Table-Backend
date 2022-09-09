const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const {TEACHER, USER} = require("../../utils/config/app-constants").SCHEMAS;


const teacherSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: USER,
  },
  name: { type: SchemaTypes.String, required: true },
});
const TeacherModel = connection.model(TEACHER, teacherSchema);
module.exports = TeacherModel;
