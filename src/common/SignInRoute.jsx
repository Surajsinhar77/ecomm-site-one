import React from 'react'
import {Routes, Route} from 'react-router-dom'
import RegistrationForm from '../components/AuthPage/RegistrationForm'
import LoginPage from '../components/AuthPage/LoginPage'
import PageNotFound from '../components/PageNotFound'


function SignInRoute() {
    return (
        <>
            <Routes>
                {/* <Route exact path="/" element={<Home/>}/> */}
                <Route  path="/register" element={<RegistrationForm/>}/>
                <Route exact path="/" element={<LoginPage/>}/>
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </>
    )
}

export default SignInRoute;