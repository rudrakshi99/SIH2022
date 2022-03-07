import React from 'react'
import './PreHeader.css';

const PreHeader = () => {
    return (
        <div className='bg-evergreen px-6 py-2'>
            <div className='flex items-center'>
                <div className='flex justify-center items-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" className='logo' alt="" />
                    <p className='font-semibold text-xs sm:text-sm ml-1'>Ministry of Skill Development and Entrepreneurship</p>
                </div>
                <div className='ml-auto'>
                    <div className='relative'>
                    <input type="search" className="mt-1 form-control relative flex-auto min-w-0 block w-full px-3 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Choose language..." aria-label="Search" aria-describedby="button-addon2" />
                        <i className='fas fa-search text-sm absolute top-1 right-2'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreHeader