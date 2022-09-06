const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const eventSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    require: true,
    ref: "user",
  },
  name: {
    type: SchemaTypes.String,
    required: true,
    unique: true
  },
  teacher: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'teacher'
  },
  class: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'class'
  },
  subject: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: 'subject'
  }
});
const EventModel = connection.model("event", eventSchema);
module.exports = EventModel;
