const operations = require("../db/repository/class_operations");

module.exports = {
    read(req, res){
        
    },
    async add(req, res){
        const object = request.body;
        const result = await operations.add(object);
        if(result && result.userid){
            response.json({message:'Record Added'});
        }
        else{
            response.json({message:"Record not Added..."});
        }
    },
    remove(req, res){
        
    },
    update(req, res){
        
    }
}