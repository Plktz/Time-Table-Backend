const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const {SUBJECT} = require("../../utils/config/app-constants").SCHEMAS;


const Schema = connection.Schema;
const subjectSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: "user",
  },
  name: { type: SchemaTypes.String, required: true ,    unique: true},
  tags: [ {type :SchemaTypes.String} ],
});
const SubjectModel = connection.model(SUBJECT, subjectSchema);
module.exports = SubjectModel;
