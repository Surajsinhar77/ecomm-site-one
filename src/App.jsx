import { useState } from 'react'
import Navbar from './components/Navbar'
import Crousal from './components/Crousal'
import './App.css'

function App() {
  const banners = [
    { imageUrl: "public/Image/veg1.jpeg", altText: 'Banner 1' },
    { imageUrl: 'public/Image/veg2.jpeg', altText: 'Banner 2' },
    { imageUrl: 'public/Image/veg3.jpeg', altText: 'Banner 3' },
  ];

  return (
    <>
      <Navbar/>
      <Crousal banners={banners} />
      <h1 className='text-green-400'>Hello World</h1>
    </>
  )
}

export default App
