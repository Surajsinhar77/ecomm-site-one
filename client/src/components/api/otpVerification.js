// const accountSid = 'AC3f7b4e8f3a603b5aff0ee25376d09846';
// const authToken = 'e32722fd361963749ce3044812571ceb';
// const client = twilio(accountSid, authToken);
// const twilioPhoneNumber = '+16818811978';

// const randomOTP = Math.floor(100000 + Math.random() * 900000);

// client.messages.create({
//     body: `Your OTP is: ${randomOTP}`,
//         from: twilioPhoneNumber, // Your Twilio phone number
//         to: '+917055532539'    // Recipient's phone number
// })
// .then(message => console.log(`Message SID: ${message.sid}`))
// .catch(error => console.error(error));