const mongoose= require("mongoose");
const validator= require("validator");

//Schema for validation whhich is in Moongoose
const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator .isEmail(email)){
                throw new Error("Invalid Email id")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        required:true,
        minlength:3
    }     
})

//We need a collection
const User=mongoose.model("User",userSchema);

//export module
module.exports =User;