const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const {EVENT} = require("../../utils/config/app-constants").SCHEMAS;

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
  },
  cycle: {
    type: SchemaTypes.Number,
    require: true
  }
});
const EventModel = connection.model(EVENT, eventSchema);
module.exports = EventModel;
