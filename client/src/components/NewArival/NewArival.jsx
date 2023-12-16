import React from 'react'

function NewArival() {
    return (
        <div className='mt-10'>
            <h1 className='text-2xl w-fit mx-auto  text-black border-2 border-white border-b-orange-500 border-spacing-y-2 '>New Arivals</h1>

            <div className='w-fit mx-auto mt-10'>
                <button className='border py-2 px-4 text-xs'>VEG</button>
                <button className='border py-2 px-4 text-xs'>FRUITS</button>
                <button className='border py-2 px-4 text-xs'>DRY FRUITS</button>
            </div>

            
        </div>
    )
}

export default NewArival