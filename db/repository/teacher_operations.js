const TeacherModel = require('../models/teacher_schema');
module.exports = {
    add(object){
        return TeacherModel.create(object);
    },
    read(object, response){
        TeacherModel.findOne({userid: object.userid, name: object.name}, (err,doc)=>{
            if(err){
                response.json({message:'Error in DB '});
                console.log(err);
            }
            else if(doc && doc.userid){
                response.json({message:'Welcome '});
            }
            else{
                response.json({message:'Invalid Userid or Password'});
            }
        });
    },
    update(object){
        TeacherModel.findOneAndUpdate();
    },
    remove(object){

    }
}