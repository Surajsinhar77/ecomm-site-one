import React from 'react'
import Filter from '../Filter/Filter'
// import VegProduct from '../NewArival/ProductsItem/VegProduct'
import ProductCard from '../NewArival/ProductsItem/ProductCard'
import { Link } from 'react-router-dom'

function Shop() {
    return (
        <div className='ShopContainer flex w-11/12 justify-center m-auto mt-5'>
            <div className="productFilter w-1/3 p-4">
                <Filter />
            </div>
            <div className="Products">
                <div className='w-full newarivalContainer mb-10'>
                    <div className=' flex flex-wrap w-fit justify-between mt-6'>
                        {/* <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard> */}

                        <Link to='/productDetail'> <ProductCard /> </Link>
                        <Link to='/productDetail'> <ProductCard /> </Link>
                        <Link to='/productDetail'> <ProductCard /> </Link>
                        <Link to='/productDetail'> <ProductCard /> </Link>
                        <Link to='/productDetail'> <ProductCard /> </Link>
                        <Link to='/productDetail'> <ProductCard /> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shop