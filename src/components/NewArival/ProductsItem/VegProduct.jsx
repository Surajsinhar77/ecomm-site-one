import React from 'react'
import ProductCart from './ProductCart'

function VegProduct() {
    return (
        <div className='w-8/12 my-auto newarivalContainer'>
            <div className=' flex flex-wrap w-fit justify-between mt-6'>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>

                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
            </div>
        </div>
        
    )
}

export default VegProduct