const connection = require("../connection");
const { SchemaTypes } = require("mongoose");
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
const SubjectModel = connection.model("subject", subjectSchema);
module.exports = SubjectModel;
