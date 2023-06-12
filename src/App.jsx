import { useState } from 'react'
import Navbar from './components/Navbar'
import Crousal from './components/Crousal'
import Items from './components/Items/Items'
import NewArival from './components/NewArival/NewArival'
import './App.css'


function App() {
  const banners = [
    { imageUrl: "public/Image/veg1.jpeg", altText: 'Banner 1' },
    { imageUrl: 'public/Image/dryfruits.jpeg', altText: 'Banner 2' },
    { imageUrl: 'public/Image/fruitItem.jpeg', altText: 'Banner 3' },
  ];

  return (
    <>
      <Navbar/>
      <Crousal banners={banners} />
      <Items/>
      <NewArival/>
    </>
  )
}

export default App
