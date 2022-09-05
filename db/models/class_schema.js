const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const UserModel = require("./user_schema");
const Schema = connection.Schema;
const classSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    ref: "user"
  },
  name: {
    type: SchemaTypes.String,
    required: true
  },
  capacity: {
    type: SchemaTypes.Number,
    required: true
  },
});
const ClassModel = connection.model("classes", classSchema);
module.exports = ClassModel;
