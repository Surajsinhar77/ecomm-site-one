const bcrypt = require('bcrypt')
const twilio = require('twilio');
const parms = require('./parms.json')

// This is the model import for user 
const userModel = require('../model/user.model')

const registerUser = async(req, res)=>{
    console.log(req.body);

    // const {fullname, email, phoneno, address,country, state,city, pincode, password} = res.body;
    const registrationInfo = req.body;
    try{
        const plainPassword = registrationInfo.password;
        const saltRounds = 10;
        const hashIngPass = bcrypt.hashSync(plainPassword, saltRounds);

        const oldUser = await userModel.findOne({email:req.body.email});
        if(oldUser){
            res.json({message:"Already user Exist",userExist : true});
            console.log("Already user Exis");
            return 
        }else{
            const user = new userModel({
                fullname : registrationInfo.fullname,
                email : registrationInfo.email,
                phoneno: registrationInfo.phoneno,
                address: `${registrationInfo.address} ${registrationInfo.city} ${registrationInfo.state} ${registrationInfo.country} ${registrationInfo.pincode}`,
                pincode : registrationInfo.pincode,
                password : hashIngPass
            })
        
            user.save().then((data)=>{
                res.status(201);
                res.json({message: "User registered successfully", data, userExist:true});
                console.log("User registered successfully")
            }).catch((err)=>{
                res.status(500).json(({
                    message: err.message,
                    error:err
                }));
            })
        }
    }catch(err){
        console.log(err);
        res.status(400).json({msg: err , message : "Password hashing sync Error"});
        return;
    };
    console.log("At last ")
}

const login = async(req, res) =>{
    try{
        const userInfo = req.body;
        const userCheack = await userModel.findOne({email:req.body.email});
        if(userCheack){
            bcrypt.compare(userInfo.password, userCheack.password).then((result)=>{
                if(result){
                    res.status(200).json({
                        result: result,
                        userdata: userCheack,
                        userExist : true,
                        msg: "You are sucessfull Login ",
                    })
                }else{
                    res.status(200).json({
                        userExist : result,
                        msg: "Invalid Cridential",
                    })
                }
            }).catch((err)=>{
                console.log({Message:err.message});
                res.status(400).json(err);
            })
        }else{
            res.status(200).json({msg: "Email Dosn't Exist"});
        }
    }catch(err){
        console.log(err);
        res.status(400).json({msg: err});
    }
}

const otpVerification = (req,res) =>{
    const accountSid = parms.accountSid;
    const authToken = parms.authTokengit;
    const client = twilio(accountSid, authToken);
    const twilioPhoneNumber = '+16818811978';
    
    const randomOTP = req.body.otp;
    console.log(randomOTP);
    // const randomOTP = Math.floor(100000 + Math.random() * 900000);
    console.log(req.body.phoneno);
    client.messages.create({
        body: `Your OTP is: ${randomOTP}`,
        from: twilioPhoneNumber,
        // to: "+91 7055532539",
        to: req.body.phoneno,

    }).then(message => res.status(200).json({ message: 'SMS sent', sid: message.sid, otpVerify:randomOTP }))
    .catch(error => res.status(500).json({ message: 'Error sending SMS', error: error.message }));
}

module.exports={
    registerUser,
    login,
    otpVerification,
}