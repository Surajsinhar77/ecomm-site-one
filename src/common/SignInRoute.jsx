import React from 'react'
import {Routes, Route} from 'react-router-dom'
import RegistrationForm from '../components/AuthPage/RegistrationForm'
import LoginPage from '../components/AuthPage/LoginPage'


function SignInRoute() {
    return (
        <>
            <Routes>
                {/* <Route exact path="/" element={<Home/>}/> */}
                <Route  path="/login" element={<RegistrationForm/>}/>
                <Route exact path="/" element={<LoginPage/>}/>
            </Routes>
        </>
    )
}

export default SignInRoute;