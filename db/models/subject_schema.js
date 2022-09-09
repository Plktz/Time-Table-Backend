const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const {SUBJECT ,USER, TEACHER, CLASS} = require("../../utils/config/app-constants").SCHEMAS;

const Schema = connection.Schema;
const subjectSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: USER,
  },
  name: { type: SchemaTypes.String, required: true, unique: true },
  class: { type: SchemaTypes.ObjectId, ref: CLASS, required: true },
  teacher: {
    type: SchemaTypes.ObjectId,
    ref: TEACHER,
    required: true,
  },
  cycle: { type: SchemaTypes.Number, required: true },
  tags: [{ type: SchemaTypes.String }],
});
const SubjectModel = connection.model(SUBJECT, subjectSchema);
module.exports = SubjectModel;
