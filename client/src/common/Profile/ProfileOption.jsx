import React from 'react'
import { Link } from 'react-router-dom'
import Mydetail from './Mydetail'
import MyAddressBook from './MyAddressBook'
import MyOrder from './MyOrder'
import MyAccountSetting from './MyAccountSetting'
function ProfileOption() {

    const ConditionRender ={
        1:<Mydetail/>,
        2:<MyAddressBook/>,
        3:<MyOrder/>,
        4:<MyAccountSetting/>
    }

    return (
        <div className="leftmenu w-1/4">
            <ul className='text-sky-900'>
                <li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'><button>My Detail</button></li>
                <li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'><button>My Address Book</button></li>
                <li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'><button>My My Order</button></li>
                <li className='text-lg m-3 p-3 ring-offset-purple-400 bg-lime-100 hover:bg-lime-300'><button>Account Setting </button></li>
            </ul>
        </div>
    )
}

export default ProfileOption