import React from 'react'
import './Footer.css';
import { useNavigate } from 'react-router-dom'
import logo from '../../img//logo.png'
import Vector from '../../img//Vector.png'
import Vector1 from '../../img//Vector1.png'
import Vector2 from '../../img//Vector2.png'
import footerBg from '../../img//footerBg.png'

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-darkgreen py-20'>
            <div className='flex justify-center items-center'>
                <div className='flex-1 border-r-2 border-black-600'>
                    <div className='flex justify-center items-center mx-8'>
                        <img src={logo} className='footerLogo' alt="" />
                        <div className='ml-4'>
                            <h3 className='text-2xl text-white font-bold mt-4'>Krishi <br /> Sadhan</h3>
                            <p className='text-sm font-normal text-white mt-2'>Kisaan upkaran ka ek Matra Sadhan.</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 px-16 border-r-2 border-black-600'>
                    <div className='flex'>
                        <ul className='list-none mr-24'>
                            <li className='text-xl text-white font-bold'>Home</li>
                            {/* <li className='text-lg text-white font-medium'>Menu</li> */}
                            <li className='text-lg text-white font-medium'>Market</li>
                        </ul>
                        <ul>
                            <li className='text-xl text-white font-bold'>Support Center</li>
                            <li className='text-lg text-white font-medium'>Help Center</li>
                            <li className='text-lg text-white font-medium cursor-pointer' onClick={() => navigate('/partner-dispute')}>Partner Dispute</li>
                            <li className='text-lg text-white font-medium'>FAQs</li>
                        </ul>
                    </div>
                    <p className='text-sm text-medium text-white mt-4'>Please provide us Feedback at: Link Name</p>
                </div>
                <div className='flex-1 px-16 border-r-2 border-black-600'>
                    <h1 className='text-xl ml-6 text-white font-bold'>Give us a follow <br /> on social media</h1>
                    <div className='flex justify-around my-5'>
                        <img className='socialIcons' src={Vector} alt="" />
                        <img className='socialIcons' src={Vector1} alt="" />
                        <img className='socialIcons' src={Vector2} alt="" />
                    </div>
                    <p className='text-lg ml-6 font-bold text-white'>Made by: Team Gryffindor</p>
                </div>
                <div className='flex-1 flex mr-6'>
                    <img src={footerBg} className='footerBgImg' alt="" />
                    <h1 className='text-xl text-white font-bold mt-6'>Ministry of Skill Development and Entrepreneurship</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer