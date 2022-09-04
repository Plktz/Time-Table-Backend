const UserModel = require('../models/user_schema');
module.exports = {
    add(userObject){
        return UserModel.create(userObject);
    },
    read(userObject, response){
        UserModel.findOne({'userid':userObject.userid, 'password':userObject.password}, (err,doc)=>{
            if(err){
                response.json({message:'Error in DB '});
                console.log(err);
            }
            else if(doc && doc.userid){
                response.json({result: true});
            }
            else{
                response.json({result: false});
            }
        });
    },
    update(userObject){
        UserModel.findOneAndUpdate({'userid':userObject.userid},{'password':userObject.password});
    },
    remove(userObject){

    }
}