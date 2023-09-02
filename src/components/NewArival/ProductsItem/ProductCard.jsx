import React from 'react'
import { useEffect, useState } from 'react';
import api from '../../api/axios.instance';
import { Link } from 'react-router-dom';
const Star = () => <span className="star">⭐</span>;
const BlankStar = () => <span className="star">☆</span>;

function ProductCard({product}) {
    const baseImgAddress = "../../../../public/productImage/"
    
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if(i<Math.floor(product.rating) ){
            stars.push(<Star key={i} />);
        }else{
            stars.push(<BlankStar key={i} />);
        }
    }  

    // useEffect(()=>{

    // })
    const addToCartFunction = (e) =>{
        e.preventDefault()
        api.post(`/cart/addToCart/${product._id}`, product._id).then((res)=>{
            console.log("item SucessFull Added to cart");
        }).catch((err)=>{
            console.log(err.message)
        })
    } 

    return (
        <div>
            <div className="w-80 mx-4 mb-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/Productdetail/${product._id}`}>
                    <img className="p-5 rounded-t-lg" src={baseImgAddress+product.mainImage} alt="product image" />
                </Link>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white"> {product.productName}</h5>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        {stars}
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white"> &#8377; {product.sellingPrice}</span>
                        {/* <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard