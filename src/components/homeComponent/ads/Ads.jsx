import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Ads.css';

const Ads = () => {
    const navigate = useNavigate();
    return (
        <div className='h-1/2 my-20'>
            <div className=''>
                <div className='flex justify-center flex-col'>
                    <h1 className='mx-auto tracking-wide text-4xl font-bold uppercase opacity-[0.7]'>Get Started</h1>
                    <p className='mx-48 leading-7 tracking-wide my-6 text-md font-medium'>We open the door to thousands of farmers. Rent your equipment for the off-season, and create an advertisement on our platform. Through our rigorous customer compliance, we make sure that only reliable users gain access to our digital marketplace. <span className='text-darkgreen'>There are two ways to get started</span>:</p>
                </div>

                <div className='flex justify-center makeCol items-center mx-28 mt-6'>
                    <div className='w-11/12 mr-16 pr-24 border-r-2 border-black-600'>
                        <h1 className='text-xl font-bold opacity-[0.7] mb-5'>Post ads as an Owner*</h1>
                        <p className='text-md font-medium mb-4'>As an owner, start posting rent offers for the agricultural equipments by providing available timeline to the buyers/customers and get rapid reactions from nearby interested customers.</p>
                        <div className='flex justify-content items-center'>
                            <p className='text-sm text-darkgreen font-medium'>*Register now and start posting Ads with one click.</p>
                            <button onClick={() => navigate('/register')} className="bg-darkgreen ml-8 hover:bg-green-700 text-lg text-white font-bold py-1 px-8 rounded">
                                Register
                            </button>
                        </div>
                    </div>
                    
                    <div className='w-11/12'>
                        <h1 className='text-xl font-bold opacity-[0.7] mb-5'>Book as a Customer*</h1>
                        <p className='text-md font-medium mb-4'>As a customer, start exploring and filter the various agri- cultural equipments for you. Communicate with the owner for negotiation/offers, and book great deals while experiencing satisfaction.</p>
                        <div className='flex justify-content items-center'>
                            <p className='text-sm text-darkgreen font-medium'>*Start exploring the equipments with one click.</p>
                            <button onClick={() => navigate('/dashboard')} className="bg-darkgreen ml-8 hover:bg-green-700 text-white text-lg font-bold py-1 px-8 rounded">
                                Explore
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ads