const UserModel = require('../models/user_schema');
module.exports = {
    add(userObject){
        return UserModel.create(userObject);
    },
    read(userObject, res){
        UserModel.findOne({'userid':userObject.userid, 'password':userObject.password}, (err,doc)=>{
            if(err){
                res.json({message:'Error in DB '});
                console.log(err);
            }
            else if(doc && doc.userid){
                res.json({result: true});
            }
            else{
                res.json({result: false});
            }
        });
    },
    update(userObject){
        UserModel.findOneAndUpdate({'userid':userObject.userid},{'password':userObject.password});
    },
    remove(userObject){

    }
}