import React from 'react'
import Crousal from './components/Crousal'
import Items from './components/Items/Items'
import NewArival from './components/NewArival/NewArival'
import VegProduct from './components/NewArival/ProductsItem/VegProduct'

function Home() {

    const banners = [
        { imageUrl: "public/Image/veg1.jpeg", altText: 'Banner 1' },
        { imageUrl: 'public/Image/dryfruits.jpeg', altText: 'Banner 2' },
        { imageUrl: 'public/Image/fruitItem.jpeg', altText: 'Banner 3' },
    ];

    return (
        <div>
            <Crousal banners={banners} />
            <Items/>
            <NewArival/>
            <VegProduct/>
        </div>
    )
}

export default Home