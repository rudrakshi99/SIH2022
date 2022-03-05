import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/logo.png';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className='h-16'>
            <div className='flex justify-center items-around'>
                <div className='flex-1'>
                <Link to='/'>
                    <div className='flex items-center justify-center lg:ml-20'>
                        <img src={logo} className='logoWeb' alt="" />
                        <h3 className='text-md font-bold opacity-[.70]'>Krishi <br /> Sadhan</h3>
                    </div>
                </Link>
                </div>
                <div className='flex-2 w-5/12'>
                    <ul className='flex mt-4 justify-around items-center'>
                        <Link to='/'><li className='text-lg cursor-pointer font-semibold text-darkgreen lg:ml-7 mr-7'>Home</li></Link>
                        <Link to='/dashboard'><li className='text-lg cursor-pointer font-semibold text-darkgreen mr-7'>Dashboard</li></Link>
                        <li className='text-lg cursor-pointer font-semibold text-darkgreen mr-7'>Our Services</li>
                        <Link to='/help'><li className='text-lg cursor-pointer font-semibold text-darkgreen mr-7'>Help</li></Link>
                    </ul>
                </div>
                <div className='flex-1 flex justify-evenly items-center'>
                    <button onClick={() => navigate('/login')} className="bg-darkgreen hover:bg-green-700 text-white font-bold py-1 px-8 rounded">
                        Login
                    </button>
                    <button onClick={() => navigate('/register')} className="bg-darkgreen hover:bg-green-700 text-white font-bold py-1 px-8 rounded">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header