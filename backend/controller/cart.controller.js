const cartModel = require('../model/cart.model');
const mongoose = require('mongoose');

const addToCart = async(req, res)=>{
    const productDetail= req.body;
    try{
        const check = await cartModel.findOne({productId:productDetail.productId});
        if(check){
            cartModel.updateOne(
                {productId : productDetail.productId},
                { $set: { quantity: check.quantity+1 } }, 
            ).then((resp)=>{
                res.json(resp)
            }).catch((err)=>{
                res.json(err.message)
            })
        }else{
            const newItem = new cartModel(productDetail);
            newItem.save().then((resp)=>{
                res.json(resp);
            }).catch((err)=>{
                res.json(err.message);
            })
        }
    }catch(err){
        console.log(err.message);
        return res.json(err.message)
    }
}

const getCartItem = async(req, res) =>{
    const data = await cartModel.find();
    return res.json(data);
}

const removeFromCart = async(req, res)=>{
    const _id = req.body;
    
    try{
        const result = await cartModel.deleteOne({productId:_id.id});
        res.json(result);
    }catch(err){
        console.log(err.message);
        res.json({msg : err});
    }
}

module.exports ={
    addToCart,
    getCartItem,
    removeFromCart
}