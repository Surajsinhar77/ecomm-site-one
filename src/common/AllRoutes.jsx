import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import RegistrationForm from '../components/AuthPage/RegistrationForm'
import LoginPage from '../components/AuthPage/LoginPage'
import ProductDetail from '../components/NewArival/ProductsItem/ProductDetail'

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/signup" element={<RegistrationForm/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/Productdetail" element={<ProductDetail/>} />
            </Routes>
        </>
    )
}

export default AllRoutes;