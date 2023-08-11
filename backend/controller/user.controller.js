const bcrypt = require('bcrypt')
// This is the model import for user 
const userModel = require('../model/user.model')

const registerUser = async(req, res)=>{
    // const {fullname, email, phoneno, address,country, state,city, pincode, password} = res.body;
    const registrationInfo = req.body;
    const oldUser = await userModel.findOne({email : body.email});
    if(oldUser){
        res.json({message:"Already user Exist",userExist : true});
    }

    const user = new userModel({
        fullname : registrationInfo.fullname,
        email : registrationInfo.email,
        phoneno: registrationInfo.phoneno,
        address: `${registrationInfo.address} ${registrationInfo.city} ${registrationInfo.state} ${registrationInfo.country} ${registrationInfo.pincode}`,
        password : bcrypt.hashSync(registrationInfo.password, 10),
    })

    user.save().then((data)=>{
        res.status(201);
        res.send({message: "User registered successfully", data});
    }).catch((err)=>{
        res.status(500).send(({
            message: err.message,
        }));
    })
}

module.exports={
    registerUser,
    
}