import React from 'react'
import { Routes } from 'react-router-dom';
import ProfileRoute from './ProfileRoute';

import Mydetail from './Mydetail'
import MyAddressBook from './MyAddressBook'
import MyOrder from './MyOrder'
import MyAccountSetting from './MyAccountSetting'
import { useState } from 'react';

function Profile() {

    const [option, setOption] = useState(1);

    const ConditionRender = {
        1: <Mydetail/>,
        2: <MyAddressBook/>,
        3: <MyOrder/>,
        4: <MyAccountSetting/>,
    }

    return (
        <div>
            {/* <Router> */}
                <div><h1 className='text-4xl p-4 mt-2'>My Account</h1></div>
                    <div className='container flex'>
                    <div className="leftmenu w-1/4">
                    <ul className='text-sky-900'>
                        <li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'
                            onClick={()=>setOption(1)}>
                            <button >My Detail</button></li>
                        <li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'
                            onClick={()=>setOption(2)}>
                            <button >My Address Book</button></li>
                        <li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'
                            onClick={()=>setOption(3)}>
                            <button >My My Order</button></li>
                        <li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'
                            onClick={()=>setOption(4)}>
                            <button >Account Setting </button></li>
                    </ul>
                </div>
                            <div className="rightContent pl-9">
                                {ConditionRender[option]}
                            </div>
                    </div>
            {/* </Router> */}
        </div>
    )
}

export default Profile