import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import RegistrationForm from '../components/AuthPage/RegistrationForm'
import LoginPage from '../components/AuthPage/LoginPage'
import ProductDetail from '../components/NewArival/ProductsItem/ProductDetail'
import Cart from '../components/Cart/Cart'
import Shop from '../components/shop/Shop'

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/signup" element={<RegistrationForm/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/Productdetail" element={<ProductDetail/>} />
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </>
    )
}

export default AllRoutes;