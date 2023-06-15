import React from 'react'
import Crousal from './components/Crousal'
import Items from './components/Items/Items'
import NewArival from './components/NewArival/NewArival'
import VegProduct from './components/NewArival/ProductsItem/VegProduct'
import Footer from './components/Footer'
import ProductDetail from './components/NewArival/ProductsItem/ProductDetail'
import { useState } from 'react'



function Home() {

    const [textpage, setTestpage] = useState(false);


    const banners = [
        { imageUrl: "public/Image/veg1.jpeg", altText: 'Banner 1' },
        { imageUrl: 'public/Image/dryfruits.jpeg', altText: 'Banner 2' },
        { imageUrl: 'public/Image/fruitItem.jpeg', altText: 'Banner 3' },
    ];

    return (
        <div>
            {
                textpage ? 

                <>
                    <Crousal banners={banners} />
                    <Items/>
                    <NewArival/>
                    <VegProduct/>
                    <Footer/>
                </>
                :
                <ProductDetail/>
            }

        </div>
    )
}

export default Home