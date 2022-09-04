const connection = require('../connection');
const {SchemaTypes} = require('mongoose');
const Schema = connection.Schema;
const userSchema = new Schema({
    'userid':{type:SchemaTypes.String, required:true, unique:true},
    'password':{type:SchemaTypes.String, required:true}
});
const UserModel = connection.model('users', userSchema);
module.exports = UserModel;