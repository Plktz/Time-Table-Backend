const UserModel = require('../models/user_schema');
module.exports = {
    add(userObject){
        return UserModel.create(userObject);
    },
    async read(userObject){
        const doc = UserModel.findOne({'userid':userObject.userid, 'password':userObject.password});
        return doc;
    },
    update(userObject){
        UserModel.findOneAndUpdate({'userid':userObject.userid},{'password':userObject.password});
    },
    remove(userObject){

    }
}