const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
const Schema = connection.Schema;
const subjectSchema = new Schema({
  userid: {
    type: SchemaTypes.ObjectId,
    ref: "user",
  },
  name: { type: SchemaTypes.String, required: true },
  tags: { type: SchemaTypes.Array },
});
const SubjectModel = connection.model("subjects", subjectSchema);
module.exports = subjectSchema;
