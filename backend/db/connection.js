const mongoose = require('mongoose');
const dataBaseUrl = require('./config')


const connectionFuntion = ()=>{
    mongoose.connect(dataBaseUrl.loaclDatabase)
    .then(()=>{
        console.log("Database is sucessfully Connected")
    }).catch((err)=>{
        console.error(err)
    })
}

module.exports = connectionFuntion;