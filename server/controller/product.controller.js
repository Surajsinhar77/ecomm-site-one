const mongoose = require('mongoose')
const productModel = require("../model/product.model");

const addProducts = async(req, res)=>{
    const products = req.body;
    const cheack = await productModel.findOne({productName:products.productName});
    if(cheack){
        res.json({message: "This data is allready Exist ", dataIs: cheack});
        console.log("This data is Already exist ");
        return;
    }
    try{
        const result = new productModel(products);
        result.save().then((respose)=>{
            res.status(200).json({message:"Data is SucessFully added to the Database", data: respose});
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({message:"Failed", message:err.message});
        })
    }catch(err){
        console.log(err);
    }
}


const getData = async(req, res) =>{
    const data = await productModel.find({});
    res.json(data);
}

const getOneData = async(req, res) => {
    const _id = req.body;
    // console.log("This is the id from body : ", _id);
    try{
        const productId = new mongoose.Types.ObjectId(_id);
        const oneData = await productModel.findById(productId);
        res.status(200).json(oneData);
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    addProducts,
    getData,
    getOneData,
}