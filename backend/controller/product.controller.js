const { response } = require("express");
const productModel = require("../model/product.model");

const addProducts = async(req, res)=>{
    const products = req.body;
    console.log(products);
    const cheack = await productModel.findOne({productName:products.productName});
    if(cheack){
        res.json({message: "This data is allready Exist ", dataIs: cheack});
        console.log("This data is Already exist ");
        return;
    }
    try{
        const result = new productModel(products);
        result.save().then((respose)=>{
            console.log(respose);
            res.status(200).json({message:"Data is SucessFully added to the Database", data: respose});
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({message:"Failed", message:err.message});
        })
    }catch(err){
        console.log(err);
    }
}

const updateProductData = (req, res) =>{
    
}

module.exports ={
    addProducts,
}