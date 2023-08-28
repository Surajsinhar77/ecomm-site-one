import React from 'react'
import api from '../api/axios.instance'
import { useState, useEffect } from 'react';

function CartItem({productId}) {
    console.log("This is Product Id ",productId)

    const[product, setProduct] =useState();
    useEffect(()=>{
        api.post(`/getProduct/:${productId.productId}`,{_id:productId.productId}).then((res)=>{
            setProduct(res.data);
        }).catch((err)=>{
            console.log(err.message)
        })
    },[])

    console.log("product is Undifine : ",product)
    if(!product){
        <div>Loding...</div>
    }
    return (
        <div className="cartItem border my-4 pt-10 pb-5 px-10">
            <div className='row flex  justify-between '>
                <div className="col flex">
                    <div className='w-32  object-cover'>
                        <img src={`../../../public/productImage/}`} alt="" />
                    </div>
                    <div className="iteminfo p-7 text-center ">
                        <ul>
                            <li>Name : Onion</li>
                            <li>QNT : {productId.quantity} kg</li>
                            <li>Price : 150rs</li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <div class="md:col-span-2 flex items-center">
                        <label className='mr-4' for="qnt">Quantity</label>
                        <div class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <input name="soda" id="soda" placeholder="0" class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent" value="0" />
                            <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-2 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row ">
                <button className='border border-gray-600 px-2 py-1 mr-4 bg-white rounded text-gray-600 my-4 hover:bg-gray-500 hover:text-white hover:border-green-500'>Remove From Cart</button>
                <button className='border border-gray-600 px-2 py-1 bg-white rounded text-gray-600 my-4 hover:bg-gray-500 hover:text-white hover:border-green-500'>Share</button>
            </div>
        </div>
    )
}

export default CartItem;