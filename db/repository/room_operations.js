const RoomModel = require('../models/room_schema');
module.exports = {
    add(object){
        return RoomModel.create(object);
    },
    read(object, response){
        RoomModel.findOne({userid: object.userid, name: object.name}, (err,doc)=>{
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
        RoomModel.findOneAndUpdate();
    },
    remove(object){

    }
}