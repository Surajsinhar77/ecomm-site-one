import React from 'react'
import { useState } from 'react';
import Checkbox from '../Filter/Checkbox'

function Filter() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [brandName, setbrandName] = useState(['option1', 'option2', 'option3', 'option4','option5']);

    const Price  = ['Rs50 to Rs100','Rs100 to Rs200','Rs200 to Rs400','Rs400 to Rs1000']

    return (
        <div>
            <h2 className='font-bold py-2'>FILTER</h2>
            <div className="category py-2 p-3 border">
                <h2 className='font-bold py-2'>Category</h2>
                <ul className='flex flex-col'>
                    <label className="inline-flex items-center py-1">
                        <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <span className="ml-2 text-gray-700">Vegtiable</span>
                    </label>
                    <label className="inline-flex items-center py-1">
                        <input
                            type="radio"
                            value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <span className="ml-2 text-gray-700">Fruits</span>
                    </label>

                    <label className="inline-flex items-center py-1">
                        <input
                            type="radio"
                            value="option3"
                            checked={selectedOption === 'option3'}
                            onChange={handleOptionChange}
                            className="form-radio h-5 w-5 text-indigo-600"
                        />
                        <span className="ml-2 text-gray-700">Dry Fruit</span>
                    </label>
                </ul>
            </div> 

            <div className="brand border py-2 p-3">
                <h2 className='font-bold py-2'>Brand</h2>
                <Checkbox length = {brandName} />
            </div>

            <div className="brand border py-2 p-3">
                <h2 className='font-bold py-2'>Price</h2>
                <Checkbox length = {Price}/>
            </div>
        </div>
    )
}

export default Filter