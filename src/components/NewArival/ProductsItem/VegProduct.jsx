import React from 'react'
import ProductCard from './ProductCard'
import api from '../../api/axios.instance'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function VegProduct() {
    const [products , setProducts] = useState([]);

    useEffect(()=>{
        api.post('/admin/getData').then((res)=>{
            setProducts(res.data);
            return
        }).catch((err)=>{
            console.log(err.message);
        })
    },products)

    return (
        <div className='w-full my-auto newarivalContainer mb-10'>
            <div className=' grid grid-cols-3 gap-3 w-fit mt-6 m-auto'>
                {
                    products.map(product => (
                        <Link to={`/Productdetail/${product._id}`} > <ProductCard key={product._id} product={product} /></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default VegProduct

{/* <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link>
                <Link to='/Productdetail'> <ProductCard/> </Link> */}