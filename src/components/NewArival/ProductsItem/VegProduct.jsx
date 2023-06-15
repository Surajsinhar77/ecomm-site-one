import React from 'react'
import ProductCard from './ProductCard'

function VegProduct() {
    return (
        <div className='w-9/12 my-auto newarivalContainer mb-10'>
            <div className=' flex flex-wrap w-fit justify-between mt-6'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>

                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>

            <div className='bg-gray-200 flex justify-between my-5'>
                <div className="one flex h-24 items-center w-1/4">
                    <span className='p-4'>
                    <i class="fa fa-truck fa-2x text-orange-500" aria-hidden="true"></i>
                    </span>
                    <span>
                        <h2>FREE SHOPPING</h2>
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                    </span>
                </div>
                <div className="cod flex h-24 items-center w-1/4">
                    <span className='p-4'>
                        <i class="fa fa-money fa-2x  text-orange-500" aria-hidden="true"></i>
                    </span>
                    <span>
                        <h2>CASH ON DELIVERY</h2>
                        <p>Internet tend to Repert</p>
                    </span>
                </div>
                <div className="returnpc flex h-24 items-center w-1/4">
                    <span className='p-4'>
                        <i class="fa fa-repeat fa-2x  text-orange-500" aria-hidden="true"></i>
                    </span>
                    <span>
                        <h2>45 DAYS RETURN</h2>
                        <p>Making it Look like Readable</p>
                    </span>
                </div>

                <div className="openAllWeek flex h-24 items-center w-1/4">
                    <span className='p-4'>
                        <i class="fa fa-clock-o fa-2x  text-orange-500" aria-hidden="true"></i>
                    </span>
                    <span>
                        <h2>OPEN ALL WEEK</h2>
                        <p>8AM : 9PM</p>
                    </span>
                </div>
            </div>
        </div>
        
    )
}

export default VegProduct