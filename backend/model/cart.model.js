const mongoose = require('mongoose')

const getCartSchema = ()=>{
    const cartSchema = mongoose.Schema({
        productId:{
            type:String,
            unique:true
        },
        quantity:{
            type:Number,
        },        
    })
    return cartSchema;
}

const cartModel = mongoose.model('cartItems', getCartSchema());
module.exports =  cartModel;
