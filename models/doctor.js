const mongoose=require('mongoose');


const doctorSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"]
    },
    password:{
        type:String,
        required:[true,"please enter your password"]
    }
})



const Doctor=new mongoose.model('Doctor',doctorSchema);

module.exports=Doctor;
