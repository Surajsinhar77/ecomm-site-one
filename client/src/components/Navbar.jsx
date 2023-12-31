import React from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from './AuthPage/AuthContext';
import { useNavigate } from 'react-router-dom';
import {getItem} from './AuthPage/AuthContext';


function Navbar() {
    const { isLoggedIn, logout} = useAuth();
    
    const navigate = useNavigate();
    const handelLogout=()=>{
        logout();
        navigate('/');
    }

    const {cartItem} =getItem();

    return (
        <div className="sticky top-0 left-0 right-0">
            <nav className="bg-green-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            {/* <!-- Logo --> */}
                            <Link to="#" className="text-bkack text-lg font-bold">VegMarket</Link>
                        </div>
                        <div className="hidden md:block">
                            {/* <!-- Nav items --> */}
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to='/' className="text-bkack hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <Link to='/shop' className="text-bkack hover:text-white px-3 py-2 rounded-md text-sm font-medium"> <i class="fa fa-shopping-basket" aria-hidden="true"></i> Shop</Link>
                                <Link to='/cart' className="text-bkack hover:text-white px-3 py-2 rounded-md text-sm font-medium"> 
                                <span className='w-7 h-7 rounded-full  bg-slate-400 text-red-600'>{cartItem}</span>
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart 
                                </Link>
                                {!isLoggedIn ? 
                                    
                                    <>
                                        <Link to='/signup' className="text-bkack hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
                                        <Link to='/login' className="text-bkack hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                                    </>
                                    :
                                    <>
                                    <Link to="/profile" className="text-bkack hover:text-white px-3 py-2 rounded-md text-sm font-medium"><i class="fa fa-user-circle" aria-hidden="true"></i> Profile </Link>
                                    <Link onClick={handelLogout} className="text-bkack hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</Link>
                                    
                                    </>
                                
                                }

                            </div>
                            
                        </div>
                        <div className="hidden md:block w-2/5">
                            {/* <!-- Search input and button --> */}
                            <div className="flex items-center">

                                    
                                    {/* serch ka form */}
                                    
                                <form className='w-full'>   
                                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                    <div class="relative">
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        </div>
                                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required></input>
                                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                                    </div>
                                </form>



                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* <!-- Mobile menu button --> */}
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:bg-gray-800 focus:text-white">
                                {/* <!-- Heroicon name: menu --> */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu --> */}
                <div className="hidden md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link  className="text-orange-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link  className="text-orange-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Shop</Link>
                        <Link  className="text-orange-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cart</Link>
                        <Link  className="text-orange-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Account</Link>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar