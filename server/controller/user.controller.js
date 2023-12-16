const bcrypt = require('bcrypt')
const twilio = require('twilio');
const parms = require('./parms.json')

// This is the model import for user 
const userModel = require('../model/user.model')

const registerUser = async(req, res)=>{
        const {fullname, phoneno,address,city, country,state, pincode ,email, password} = req.body;
    try {
        // Check if the user already exists
        const existingUser = await userModel.findOne({ $or: [{ fullname }, { email }] });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
    
        
        const hashedPassword =await bcrypt.hash(password, 10);

        const user = new userModel({ 
            fullname:fullname, 
            phoneno:phoneno,
            address :`${address} ${city} ${country} ${state} ${pincode}`, 
            pincode:pincode,
            email:email, 
            password : hashedPassword,
        });

        const result = await user.save();
        return res.status(201).json({ message: 'User registered successfully' ,data : result});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
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
                        msg: "Invalid Password",
                    })
                }
            }).catch((err)=>{
                console.log({Message:err.message});
                res.status(400).json(err);
            })
        }else{
            res.status(200).json({msg: "Email Dosn't Exist", userExist: false});
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