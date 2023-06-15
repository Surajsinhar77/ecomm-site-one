import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import RegistrationForm from '../components/AuthPage/RegistrationForm'
import LoginPage from '../components/AuthPage/LoginPage'

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/signup" element={<RegistrationForm/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </>
    )
}

export default AllRoutes;