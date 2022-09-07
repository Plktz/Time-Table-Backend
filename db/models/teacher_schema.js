const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const {TEACHER} = require("../../utils/config/app-constants").SCHEMAS;


const teacherSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: "user",
  },
  name: { type: SchemaTypes.String, required: true },
});
const TeacherModel = connection.model(TEACHER, teacherSchema);
module.exports = TeacherModel;
