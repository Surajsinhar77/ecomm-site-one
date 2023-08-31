import React from 'react'
import { Link } from 'react-router-dom'

function ProfileOption() {
    return (
        <div className="leftmenu w-1/4">
            <ul className='text-sky-900'>
                <Link to="/profile"> <li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'><button>My Detail</button></li></Link>
                <Link to="/profile/myaddressbook"><li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'><button>My Address Book</button></li></Link>
                <li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'><button>My My Order</button></li>
                <li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'><button>Account Setting </button></li>
            </ul>
        </div>
    )
}

export default ProfileOption