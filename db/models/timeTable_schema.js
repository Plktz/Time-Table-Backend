const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const {USER} = require("../../utils/config/app-constants").SCHEMAS;

const Schema = connection.Schema;
const timeTableSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    ref: USER,
  },
  subject: [{type: SchemaTypes.ObjectId, ref: "subjects"}]
});
const TimeTableModel = connection.model("timetable", timeTableSchema);
module.exports = TimeTableModel;