import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import RegistrationForm from '../components/AuthPage/RegistrationForm'
import LoginPage from '../components/AuthPage/LoginPage'
import ProductDetail from '../components/NewArival/ProductsItem/ProductDetail'
import Cart from '../components/Cart/Cart'
import Shop from '../components/shop/Shop'
import Profile from './Profile/Profile'
import Mydetail from './Profile/Mydetail'
import PageNotFound from '../components/PageNotFound'


function AllRoutes() {
    // const {_id} =useParams(); 
    // const pat = `/Productdetail/:${_id}`
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/signup" element={<RegistrationForm/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/Productdetail/:_id" element={<ProductDetail/>} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/profile" element={<Profile/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </>
    )
}

export default AllRoutes;