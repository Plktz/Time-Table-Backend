const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const roomSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    ref: "user",
  },
  name: { type: SchemaTypes.String, required: true },
  tags: { type: SchemaTypes.Array },
});
const RoomModel = connection.model("rooms", roomSchema);
module.exports = roomSchema;
