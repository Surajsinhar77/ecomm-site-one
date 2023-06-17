import React from 'react'
import CartItem from './CartItem'
import './cart.css'

function Cart() {
    return (
        <>
            <h1 className='text-center text-3xl mt-7 '>Your Shopping cart </h1>

        <div className='m-auto mt-7 flex justify-evenly'>
                <div className="ItemInCart border w-4/6 p-10  scroll-container scroll-container h-[75vh] overflow-y-scroll relative">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
                <div className='totalFinalPrice  items-center sticky border border-gray-300 p-7 h-fit'>
                    <div className='flex flex-col justify-end'>
                        <ul className='text-end'>
                            <li className='text-xl'>Sub Total : <span className='text-red-700'>&#8377; 6153</span></li>
                            <li>Delivery Charge : <span className='text-green-700'>FREE</span> </li>
                            <li>GST Charge :  <span className='text-red-700'>&#8377;20</span> </li>
                            <li className='text-2xl'>Total :  <span className='text-red-700'>&#8377; 6173</span></li>
                        </ul>
                    </div>
                        
                        <div className=''>
                            <div className='my-5'>
                                <label htmlFor="forcoupon">Enter Coupon Code</label>
                                <div className='flex my-2'>
                                    <input className='border border-gray-400 h-10 rounded pl-2 w-64 mr-3' placeholder='#DAILY10'  type="text" />
                                    <button className='border border-gray-600 px-2 py-1  h-10 bg-white rounded text-gray-600  hover:bg-gray-500 hover:text-white hover:border-green-500 focus:border-none'>Apply</button>
                                </div>
                            </div>
                            <button className='border border-white px-5 py-3   bg-green-700 rounded text-white my-4 hover:bg-white hover:text-gray-600 hover:border-gray-600'>Process to Checkout</button>
                        </div>
                    </div>
        </div>
        </>

    )
}

export default Cart