const mongoose = require('mongoose');
const URL = process.env.MONGODB_URI;
mongoose.connect(URL,(err)=>{
    if(err){
        console.log('Connection Error ', err);
    }
    else{
        console.log('Connected....');
    }
});
module.exports = mongoose;