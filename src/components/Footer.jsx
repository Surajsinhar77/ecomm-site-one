import React from 'react'

function Footer() {
    return (
        <div>
            <div className='bg-gray-200 flex justify-between my-5'>
                <div className="one flex h-24 items-center w-1/4">
                    <span className='p-4'>
                    <i class="fa fa-truck fa-2x text-orange-500" aria-hidden="true"></i>
                    </span>
                    <span>
                        <h2>FREE SHOPPING</h2>
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                    </span>
                </div>
                <div className="cod flex h-24 items-center w-1/4">
                    <span className='p-4'>
                        <i class="fa fa-money fa-2x  text-orange-500" aria-hidden="true"></i>
                    </span>
                    <span>
                        <h2>CASH ON DELIVERY</h2>
                        <p>Internet tend to Repert</p>
                    </span>
                </div>
                <div className="returnpc flex h-24 items-center w-1/4">
                    <span className='p-4'>
                        <i class="fa fa-repeat fa-2x  text-orange-500" aria-hidden="true"></i>
                    </span>
                    <span>
                        <h2>45 DAYS RETURN</h2>
                        <p>Making it Look like Readable</p>
                    </span>
                </div>

                <div className="openAllWeek flex h-24 items-center w-1/4">
                    <span className='p-4'>
                        <i class="fa fa-clock-o fa-2x  text-orange-500" aria-hidden="true"></i>
                    </span>
                    <span>
                        <h2>OPEN ALL WEEK</h2>
                        <p>8AM : 9PM</p>
                    </span>
                </div>
            </div>
            <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer