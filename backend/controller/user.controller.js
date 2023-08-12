const bcrypt = require('bcrypt')


// This is the model import for user 
const userModel = require('../model/user.model')

const registerUser = async(req, res)=>{
    // const {fullname, email, phoneno, address,country, state,city, pincode, password} = res.body;
    const registrationInfo = req.body;
    const oldUser = await userModel.findOne({email:req.body.email});
    if(oldUser){
        res.json({message:"Already user Exist",userExist : true});
    }

    const user = new userModel({
        fullname : registrationInfo.fullname,
        email : registrationInfo.email,
        phoneno: registrationInfo.phoneno,
        address: `${registrationInfo.address} ${registrationInfo.city} ${registrationInfo.state} ${registrationInfo.country} ${registrationInfo.pincode}`,
        pincode : registrationInfo.pincode,
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

const login = async(req, res) =>{
    try{
        const userInfo = req.body;
        const userCheack = await userModel.findOne({email:req.body.email});
        if(userCheack){
            bcrypt.compare(userInfo.password, userCheack.password).then((result)=>{
                if(result){
                    res.status(200).send({
                        result: result,
                        userdata: userCheack,
                        userExist : true,
                        msg: "You are sucessfull Login ",
                    })
                }else{
                    res.status(200).send({
                        userExist : result,
                        msg: "Invalid Cridential",
                    })
                }
            }).catch((err)=>{
                console.log({Message:err.message});
                res.status(400).send(err);
            })
        }else{
            res.status(200).send({msg: "Email Dosn't Exist"});
        }
    }catch(err){
        console.log(err);
        res.status(400).send({msg: err});
    }
}

module.exports={
    registerUser,
    login,
}