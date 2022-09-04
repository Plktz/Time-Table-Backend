const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const eventSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    ref: "user",
  },
  name: {
    type: SchemaTypes.String,
    required: true,
  },
  teacher: {
    type: SchemaTypes.ObjectId,
  },
  class: {
    type: SchemaTypes.ObjectId,
  },
  subject: {
    type: SchemaTypes.ObjectId,
  },
  room: {
    type: SchemaTypes.ObjectId,
  },
});
const EventModel = connection.model("subjects", eventSchema);
module.exports = EventModel;
