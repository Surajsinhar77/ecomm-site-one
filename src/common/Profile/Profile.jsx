import React from 'react'
import { Routes } from 'react-router-dom';
import ProfileRoute from './ProfileRoute';
import Mydetail from './Mydetail';
import ProfileOption from './ProfileOption'
import MyAddressBook from './MyAddressBook';

function Profile() {
    return (
        <div>
            {/* <Router> */}
                <div><h1 className='text-4xl p-4 mt-2'>My Account</h1></div>
                    <div className='container flex'>
                            <ProfileOption/>
                            <div className="rightContent pl-9">
                                <Routes exact path="/profile" element={<Mydetail/>}/>
                                <Routes path="/profile/myaddressbook" element={<MyAddressBook/>}/>
                            </div>
                    </div>
            {/* </Router> */}
        </div>
    )
}

export default Profile