import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Mydetail from './Mydetail';
import MyAddressBook from './MyAddressBook';

function ProfileRoute() {
    return (
        <>
            <Routes>
                <Route exact path='/profile' element={<Mydetail/>}/>
                <Route path='/profile/myaddressbook' element={<MyAddressBook/>}/>
            </Routes>
        </>
    )
}

export default ProfileRoute