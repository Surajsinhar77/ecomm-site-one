import React from 'react'

function ProductDetail() {
    return (
        <div className='flex w-4/5 m-auto mt-20'>
            <div className="imagesCol border w-40 h-2/4">
                <img className='p-3' src="../../../../public/Image/ProductImg/Onion1.jpeg" alt="" />
                <img className='p-3' src="../../../../public/Image/ProductImg/Onion2.jpeg" alt="" />
                <img className='p-3' src="../../../../public/Image/ProductImg/Onion3.jpeg" alt="" />
                <img className='p-3' src="../../../../public/Image/ProductImg/Onion4.jpeg" alt="" />
                <img className='p-3' src="../../../../public/Image/ProductImg/Onion4.jpeg" alt="" />
            </div>
            
            <div className="mainImage">
                <img className='h-5/6' src="../../../../public/Image/ProductImg/Onion3.jpeg" alt="" />
            </div>
            <div className="productInfo">
                <h2 className='text-5xl font-bold'>The Onion </h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore repellendus nulla illum, quasi provident consequatur et accusamus sapiente eos?</p>
                <button className='border border-white px-5 py-3 bg-blue-700 rounded text-white my-4'>FREE DELIVARY</button>
                <div className="priceNdRating">
                    <h3 className='text-green-600 text-lg font-bold'>IN STOCK</h3>
                    <h3 className='MRP line-through'> <i className='fa fa-rupee'></i> 80.65</h3>
                    <div className='flex'>
                        <h3 className='sellingPrize text-3xl text-red-600 font-bold mr-4'><i className='fa fa-rupee'></i> 50.54</h3>
                        <div class="flex items-center mt-2.5 mb-5">
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
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
                    <button className='border border-gray-500 px-5 py-3 mr-3 bg-white rounded text-gray-700 my-4 hover:bg-blue-600 hover:text-white'>ADD TO CART</button>
                    <button className='border border-gray-500 px-5 py-3 mr-3 bg-white rounded text-gray-700 my-4 hover:bg-blue-600 hover:text-white'>BUY NOW</button>
                    <button className='wishlist border border-gray-500 px-5 py-3 mr-3 bg-white rounded text-gray-700 my-4 hover:bg-red-600 hover:text-white'><i class="fa fa-heart-o fa-lg" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail