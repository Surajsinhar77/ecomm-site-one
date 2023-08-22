const bcrypt = require('bcrypt')
const twilio = require('twilio');

// This is the model import for user 
const userModel = require('../model/user.model')

const registerUser = async(req, res)=>{
    // const {fullname, email, phoneno, address,country, state,city, pincode, password} = res.body;
    const registrationInfo = req.body;
    try{
        const oldUser = await userModel.findOne({email:req.body.email});
        if(oldUser){
            res.json({message:"Already user Exist",userExist : true});
            console.log("this one is TRue");
            return 
        }else{
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
                res.send({message: "User registered successfully", data, userExist:true});
            }).catch((err)=>{
                res.status(500).send(({
                    message: err.message,
                    error:err
                }));
            })
        }
    }catch(err){
        console.log(err);
        res.status(400).send({msg: err});
    }
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

const otpVerification = (req,res) =>{
    const accountSid = 'AC3f7b4e8f3a603b5aff0ee25376d09846';
    const authToken = 'e32722fd361963749ce3044812571ceb';
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