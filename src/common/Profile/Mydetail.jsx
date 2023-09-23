import React from 'react'
import ProfilePic from '../../../public/Image/profilepic.jpeg'

function Mydetail({userData}) {
    
    return (
        <div>
            <div className="personalInformation">
                <h1 className='text-xl mb-3'>Profile Picture</h1>
                <div className="info mb-5">
                    <div className="name flex items-center">
                        <img className='w-20 h-20 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' src={ProfilePic} alt="profile picture" />
                        <div className='ml-5'>
                            
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Change/Update Profile Picture</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                        </div>
                        <button className='ml-4 rounder border border-blue-400 px-2 rounded h-10 text-gray-400' disabled>Save</button>
                    </div>
                </div>
                <h1>Personal Information <span><button className='text-blue-700 pl-2 '> Edit</button></span></h1>
                <div className="info mb-5 flex">
                    <div className="name flex ">
                        <input className='pl-2' type="text" placeholder={userData.fullname} disabled />
                        <input className='pl-2 ml-3' type="text" placeholder='Kumar' disabled />
                    </div>
                    <button className='ml-4 rounder border border-blue-400 px-2 rounded text-gray-400' disabled>Save</button>
                </div>
                <div className="info mb-5">
                    <h1>Contact Info <span><button className='text-blue-700 pl-2 '> Edit</button></span></h1>
                    <div className="name flex ">
                        <input className='pl-2 w-24' type="number" placeholder='+91' disabled />
                        <input className='pl-2 ml-3' type="text" placeholder={userData.phoneno} disabled />
                        <button className='ml-4 rounder border border-blue-400 px-2 rounded  text-gray-400' disabled>Save</button>
                    </div>
                </div>

                <div className="info mb-5">
                    <h1>Email Info <span><button className='text-blue-700 pl-2 '> Edit</button></span></h1>
                    <div className='flex'>
                        <input className='pl-2' type="email" placeholder={userData.email} disabled />
                        <button className='ml-4 rounder border border-blue-400 px-2 rounded  text-gray-400' disabled>Save</button>
                    </div>
                </div>
                
                <div className="info mb-5">
                    <h1>Address Info <span><button className='text-blue-700 pl-2 '> Edit</button></span></h1>
                    <div className='flex'>
                        <input className='pl-2' type="text" placeholder={`${userData.address}`} disabled />
                        <button className='ml-4 rounder border border-blue-400 px-2 rounded  text-gray-400' disabled>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mydetail