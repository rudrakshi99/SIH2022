import React from 'react'
import './PreHeader.css';

const PreHeader = () => {
    return (
        <div className='bg-evergreen px-6 py-2'>
            <div className='flex justify-around items-center'>
                <div className='flex justify-center items-center'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" className='logo' alt="" />
                    <p className='font-semibold text-xs sm:text-sm ml-1'>Ministry of Skill Development and Entrepreneurship</p>
                </div>
                <div className=''>
                    <div className='' id='google_element'></div>
                </div>
            </div>
        </div>
    )
}

export default PreHeader