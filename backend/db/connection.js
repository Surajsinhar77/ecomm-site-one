const mongoose = require('mongoose');
const dataBaseUrl = require('./config')


const connectionFuntion = ()=>{
    mongoose.connect(dataBaseUrl.ProductionDatabase)
    .then(()=>{
        console.log("Database is sucessfully Connected")
    }).catch((err)=>{
        console.error(err)
    })
}

module.exports = connectionFuntion;