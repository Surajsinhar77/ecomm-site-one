const cartModel = require('../model/cart.model');

const addToCart = async(req, res)=>{
    const productDetail= req.body;
    try{
        const check = await cartModel.findOne({productId:productDetail.productId});
        if(check){
            console.log("here we come")
            cartModel.updateOne(
                {productId : productDetail.productId},
                { $set: { quantity: check.quantity+1 } }, 
            ).then((resp)=>{
                console.log(resp);
                res.json(resp)
            }).catch((err)=>{
                console.log(err)
                res.json(err.message)
            })
        }else{
            const newItem = new cartModel(productDetail);
            newItem.save().then((resp)=>{
                res.json(resp);
            }).catch((err)=>{
                console.log(err)
                res.json(err.message);
            })
        }
    }catch(err){
        console.log(err.message);
        res.json(err.message)
    }
}

const getCartItem = async(req, res) =>{
    const data = await cartModel.find();
    console.log(data)
    res.json(data)
}

module.exports={
    addToCart,
    getCartItem
}