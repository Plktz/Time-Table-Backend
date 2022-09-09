const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const {ROOM, USER} = require("../../utils/config/app-constants").SCHEMAS;


const roomSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    required: true,
    ref: USER,
  },
  name: { type: SchemaTypes.String, required: true, unique: true },
  capacity: { type: SchemaTypes.Number, required: true},
  tags: { type: SchemaTypes.Array },
});
const RoomModel = connection.model(ROOM, roomSchema);
module.exports = RoomModel;
