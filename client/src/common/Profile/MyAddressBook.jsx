import React from 'react'

function MyAddressBook() {
  return (
    <div className='myaddressBook'>
      <div className='flex pb-5 border-b border-blue-300 mb-4'>
        <h1 className='text-lg'>Add More Address</h1>
        <button className='border px-3 py-1 border-gray-400 rounded ml-5 text-gray-500 hover:text-green-400 hover:border-green-400'>Add</button>
      </div>
        <dl class="max-w-full text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
            <div class="flex flex-col pb-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Home Address</dt>
                <dd class="text-lg font-semibold">India gate, NJ 07103, Delhi, India  
                  <button className='border px-3 py-1 border-blue-400 rounded ml-5 text-green-500'>Edit</button> 
                  <button className='border px-3 py-1  border-blue-400 rounded ml-5  text-red-500'>Delete</button> 
                </dd>
            </div>
            <div class="flex flex-col py-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Office Address</dt>
                <dd class="text-lg font-semibold">92 Miles Drive, Newark, NJ 07103, California, USA 
                <button className='border px-3 py-1 border-blue-400 rounded ml-5 text-green-500'>Edit</button> 
                  <button className='border px-3 py-1  border-blue-400 rounded ml-5  text-red-500'>Delete</button>
                </dd>
                
            </div>
            <div class="flex flex-col pt-3">
                <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Local Address</dt>
                <dd class="text-lg font-semibold">Mumbai  gate, NJ 07103, mumbai, India 
                  <button className='border px-3 py-1 border-blue-400 rounded ml-5 text-green-500'>Edit</button> 
                  <button className='border px-3 py-1  border-blue-400 rounded ml-5  text-red-500'>Delete</button>
                </dd>
            </div>
        </dl>

    </div>
  )
}

export default MyAddressBook