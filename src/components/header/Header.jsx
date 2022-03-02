import React from 'react';
import './Header.css';
import logo from '../../img/logo.png';

const Header = () => {
    return (
        <div className='h-16'>
            <div className='flex justify-center items-around'>
                <div className='flex-1'>
                    <div className='flex items-center justify-center lg:ml-20'>
                        <img src={logo} className='logoWeb' alt="" />
                        <h3 className='text-md font-bold opacity-[.70]'>Krishi <br /> Sadhan</h3>
                    </div>
                </div>
                <div className='flex-2 w-5/12'>
                    <ul className='flex mt-4 justify-around items-center'>
                        <li className='text-lg cursor-pointer font-semibold text-darkgreen lg:ml-7 mr-7'>Home</li>
                        <li className='text-lg cursor-pointer font-semibold text-darkgreen mr-7'>Dashboard</li>
                        <li className='text-lg cursor-pointer font-semibold text-darkgreen mr-7'>Our Services</li>
                        <li className='text-lg cursor-pointer font-semibold text-darkgreen mr-7'>Help</li>
                    </ul>
                </div>
                <div className='flex-1 flex justify-evenly items-center'>
                    <button class="bg-darkgreen hover:bg-green-700 text-white font-bold py-1 px-8 rounded">
                        Login
                    </button>
                    <button class="bg-darkgreen hover:bg-green-700 text-white font-bold py-1 px-8 rounded">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header