const mongoose = require('mongoose');

const userScheme = ()=>{
    const Schema = mongoose.Schema({
        fullname:{
            type: String,
            required: true
        },
        phoneno:{
            type:Number,
            require:true,
            unique: true,
        },
        email:{
            type: String,
            unique:[true, "Email is already exist"],
            required : true,
            lowercase: true,
        },
        password:{
            type:String,
            required : true,
        },
        address:{
            type: String,
            required : true,
        },
        pincode:{
            type: true,
            require: true,
        }
    })
    return Schema;
};

const userModel = mongoose.model('users', userScheme());
module.exports = userModel; 