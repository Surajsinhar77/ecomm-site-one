const mongoose = require('mongoose')

const getCartSchema = ()=>{
    const cartSchema = mongoose.Schema({
        productId:{
            type:String,
            unique:true
        },
        quantity:{
            type:Number,
            unique:false
        }
    })
    return cartSchema;
}
module.exports = mongoose.model('cartItems', getCartSchema());
