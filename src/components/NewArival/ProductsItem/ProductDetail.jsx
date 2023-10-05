import React from 'react'
import { useEffect } from 'react';
import api from '../../api/axios.instance'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const Star = () => <span className="star">⭐</span>;
const BlankStar = () => <span className="star">☆</span>;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetail() {
    const { _id } = useParams();
    console.log("This is the id :",_id);
    const [product, setProduct] = useState();
    
    // For Notification 
    const notify = async(message)=>{
        const  Noti =()=>{
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            })
        }
        setTimeout(()=>{
            Noti();
        },1000)
    }

    // for rating 
    const addToCartFunction = (e) =>{
        e.preventDefault();
        api.post(`/cart/addToCart/${_id}`, {productId:_id, quantity:1}).then((res)=>{
            notify("Item SucessFull Added to cart");
        }).catch((err)=>{
            notify(err.message);
            console.log(err.message)
        })
    } 


    useEffect(()=>{
        api.post(`/getProduct/${_id}`, {id:_id}).then((res)=>{
            setProduct(res.data);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[]);

    

    if(!product){
        return <div>Loading...</div>;
    }

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if(i<Math.floor(product.rating) ){
            stars.push(<Star key={i} />);
        }else{
            stars.push(<BlankStar key={i} />);
        }
    }
    return(
        <div className='flex w-4/5 m-auto mt-20'>
            <div className="imagesCol border w-48 h-2/4">
                <img className='p-3' src="../../../../public/Image/ProductImg/Onion1.jpeg" alt="" />
                <img className='p-3' src="../../../../public/Image/ProductImg/Onion2.jpeg" alt="" />
                <img className='p-3' src="../../../../public/Image/ProductImg/Onion3.jpeg" alt="" />
                <img className='p-3' src="../../../../public/Image/ProductImg/Onion4.jpeg" alt="" />
                <img className='p-3' src="../../../../public/Image/ProductImg/Onion4.jpeg" alt="" />
            </div>
            
            <div className="mainImage mr-4 ml-3">
                <img className='h-5/6 object-cover' src={`../../../../public/productImage/${product.mainImage}`} alt="" />
            </div>
            <div className="productInfo">
                <h2 className='text-5xl font-bold'>{product.productName} </h2>
                <p className='mt-4'>{product.discription}</p>
                <button className='border border-white px-5 py-3 bg-blue-700 rounded text-white my-4'>FREE DELIVARY</button>
                <div className="priceNdRating">
                    <h3 className='text-green-600 text-lg font-bold'>
                        {product.stock? "IN STOCK":
                            "OUT OF STOCK"
                        }
                    </h3>
                    <h3 className='MRP line-through'> <i className='fa fa-rupee'></i> {product.marketprice}</h3>
                    <div className='flex'>
                        <h3 className='sellingPrize text-3xl text-red-600 font-bold mr-4'><i className='fa fa-rupee'></i>
                        {product.sellingPrice}
                        </h3>
                        <div class="flex items-center mt-2.5 mb-5">
                        {stars}
                            {/* <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg> */}
                        
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.rating}</span>
                    </div>
                    </div>
                </div>
                <h2>Select Quantity</h2>
                <div className="weigthopt">
                        <button className='border border-gray-500 px-5 py-3 mr-3 bg-white rounded text-gray-700 my-4 hover:bg-gray-600 hover:text-white'>1Kg</button>
                        <button className='border border-gray-500 px-5 py-3 mr-3 bg-white rounded text-gray-700 my-4 hover:bg-gray-600 hover:text-white'>2Kg</button>
                        <button className='border border-gray-500 px-5 py-3 mr-3 bg-white rounded text-gray-700 my-4 hover:bg-gray-600 hover:text-white'>5Kg</button>
                </div>

                <div className="buyingOption">
                    <button onClick={addToCartFunction} className='border border-gray-500 px-5 py-3 mr-3 bg-white rounded text-gray-700 my-4 hover:bg-blue-600 hover:text-white'>ADD TO CART</button>
                    <button className='border border-gray-500 px-5 py-3 mr-3 bg-white rounded text-gray-700 my-4 hover:bg-blue-600 hover:text-white'>BUY NOW</button>
                    <button className='wishlist border border-gray-500 px-5 py-3 mr-3 bg-white rounded text-gray-700 my-4 hover:bg-red-600 hover:text-white'><i class="fa fa-heart-o fa-lg" aria-hidden="true"></i></button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default ProductDetail