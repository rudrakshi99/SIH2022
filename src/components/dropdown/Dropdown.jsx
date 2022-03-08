import React from 'react'
import './Dropdown.css';

const Dropdown = ({title}) => {
    return (
        <div className="dropdown mt-1.5 cursor-pointer">
            <div className='flex relative py-3 items-center'>
                <h1 className='absolute top-0 px-5 left-0 text-md text-[#4F4F4F] text-wide font-normal'>{title}</h1>
                <i className="absolute top-0 pr-5 right-0 pl-1 w-5 fa-solid fa-angle-right text-green-700"></i>
            </div>
            {/* <div className="dropdown-content">
                <p>Hello World!</p>
            </div> */}
        </div>
    )
}

export default Dropdown