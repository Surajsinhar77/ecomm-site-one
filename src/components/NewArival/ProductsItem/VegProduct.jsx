import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

function VegProduct() {
    return (
        <div className='w-9/12 my-auto newarivalContainer mb-10'>
            <div className=' flex flex-wrap w-fit justify-between mt-6'>
                <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link>
            </div>
            
        </div>
    )
}

export default VegProduct