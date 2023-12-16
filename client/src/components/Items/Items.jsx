import React from 'react'
import './items.css'

function Items() {
    return (
        <div className='category flex w-fit justify-between m-auto my-4'>
            <div className='itemsOption vegies flex justify-center items-center rounded-lg mr-2 ml-4'>
                <h1 className='text-xl text-black bg-white py-1 px-3 rounded'>Vegetable</h1>
            </div>

            <div className='itemsOption Fruits flex justify-center items-center rounded-lg mr-2 ml-2'>
                <h1 className='text-xl text-black bg-white py-1 px-3 rounded'>Fruits</h1>
            </div>

            <div className='itemsOption DryFruits flex justify-center items-center rounded-lg mr-4 ml-2'>
                <h1 className='text-xl text-black bg-white py-1 px-3 rounded'>Dry Fruits</h1>
            </div>
        </div>
    )
}

export default Items