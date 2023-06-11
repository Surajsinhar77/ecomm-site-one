import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="bg-green-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            {/* <!-- Logo --> */}
                            <a href="#" className="text-orange-500 text-lg font-bold">Logo</a>
                        </div>
                        <div className="hidden md:block">
                            {/* <!-- Nav items --> */}
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="text-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="#" className="text-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shop</a>
                                <a href="#" className="text-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Cart</a>
                                <a href="#" className="text-orange-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Account</a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            {/* <!-- Search input and button --> */}
                            <div className="flex items-center">
                                <input type="text" placeholder="Search" className="bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-4 py-2 text-sm"></input>
                                    <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">Search</button>
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
                        <a href="#" className="text-orange-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="#" className="text-orange-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Shop</a>
                        <a href="#" className="text-orange-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Cart</a>
                        <a href="#" className="text-orange-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Account</a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar