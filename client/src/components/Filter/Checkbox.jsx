import React, { useState } from 'react';

const Checkbox = (prop) => {
    // State to store the selected checkbox values
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Function to handle checkbox selection
    const handleOptionChange = (event) => {
        event.preventDefault()
        const value = event.target.value;
        setSelectedOptions((prevOptions) =>
            prevOptions.includes(value)
                ? prevOptions.filter((option) => option !== value)
                : [...prevOptions, value]
        );
    };

    return (
        <div className='flex flex-col'>
            {
                prop.length.map(element => 
                        <label  key={element} className="inline-flex items-center p-1">
                            <input
                                type="checkbox"
                                value= {element}
                                checked={selectedOptions.includes(element)}
                                onChange={handleOptionChange}
                                className="form-checkbox h-5 w-5 text-indigo-600"
                            />
                        <span className="ml-2 text-gray-700">{element}</span>
                        </label>
                    
                )
            }

            {/* <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    value="option1"
                    checked={selectedOptions.includes('option1')}
                    onChange={handleOptionChange}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-gray-700">Option 1</span>
            </label>

            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    value="option2"
                    checked={selectedOptions.includes('option2')}
                    onChange={handleOptionChange}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-gray-700">Option 2</span>
            </label>

            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    value="option3"
                    checked={selectedOptions.includes('option3')}
                    onChange={handleOptionChange}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-gray-700">Option 3</span>
            </label>

            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    value="option4"
                    checked={selectedOptions.includes('option4')}
                    onChange={handleOptionChange}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-gray-700">Option 4</span>
            </label>
            <label className="inline-flex items-center">
                <input
                    type="checkbox"
                    value="option5"
                    checked={selectedOptions.includes('option5')}
                    onChange={handleOptionChange}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="ml-2 text-gray-700">Option 5</span>
            </label>
            */}
        </div> 
    );
};

export default Checkbox;
