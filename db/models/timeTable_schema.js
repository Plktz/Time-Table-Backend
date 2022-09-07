const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const timeTableSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    ref: "user",
  },
  name: { type: SchemaTypes.String, required: true },
  periods: {types: SchemaTypes.Number, required: true},
  breaks: [{types: SchemaTypes.Number}],
  events: [{type: SchemaTypes.ObjectId, ref: "events"}]
});
const TimeTableModel = connection.model("timetable", timeTableSchema);
module.exports = TimeTableModel;