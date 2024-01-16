const mongoose = require('mongoose');

const connectionFuntion = ()=>{
    const url = process.env.DATABASE_URL;
    mongoose.connect(url)
    .then(()=>{
        console.log("Database is sucessfully Connected")
    }).catch((err)=>{
        console.error(err)
    })
}

module.exports = connectionFuntion;