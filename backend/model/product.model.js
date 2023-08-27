const mongoose = require('mongoose');

const products = () =>{
    const productItems = mongoose.Schema({
        productName : {
            type: String,
            unique: true,
        },
        stock:{
            type: Boolean,
        },
        discription:{
            type:String
        },
        rating:{
            type:Number,
        },
        marketprice:{
            type:Number,  
        },
        sellingPrice:{
            type:Number,
        },

        mainImage:{
            type:String,
            unique:true,
        },
        otherImages1:{
            type:String,
        },
        otherImages2:{
            type:String,
        },
        otherImages3:{
            type:String,
        },
        otherImages4:{
            type:String,
        },
    })
    return productItems;
}

module.exports = mongoose.model('products', products());