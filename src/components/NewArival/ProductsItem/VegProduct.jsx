import React from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

function VegProduct() {
    return (
        <div className='w-full my-auto newarivalContainer mb-10'>
            <div className=' grid grid-cols-3 gap-3 w-fit mt-6 m-auto'>
                <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link>
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