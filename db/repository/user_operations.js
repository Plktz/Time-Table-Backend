const UserModel = require('../models/user_schema');
module.exports = {
    async add(userObject){
        try{
            const doc = await UserModel.create(userObject);
            return doc;
        }catch(e){
            return e;
        }
    },
    async read(userObject){
        const doc = UserModel.findOne({'userid':userObject.userid, 'password':userObject.password});
        return doc;
    },
    update(userObject){
        return UserModel.findOneAndUpdate({'userid':userObject.userid},{'password':userObject.password});
    },
    remove(userObject){

    }
}