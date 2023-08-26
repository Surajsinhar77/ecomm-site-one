const mongoose = require('mongoose');
const { stringify } = require('postcss');

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
            type:Number
        },

        mainImage:{
            type:String,
            unique:true,
        },
        otherImages1:{
            type:String,
            unique : true,
        },
        otherImages2:{
            type:String,
            unique : true,
        },
        otherImages3:{
            type:String,
            unique : true,
        },
        otherImages4:{
            type:String,
            unique : true,
        },
    })
    return productItems;
}

module.exports = mongoose.model('products', products());