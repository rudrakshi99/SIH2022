import React from 'react'
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='h-[460px] py-12 bg-[rgba(255,255,255,0.8)]'>
            <div className='flex justify-center'>
                <div className='flex-1 pl-40'>
                    <h1 className='text-3xl pt-6 text-gray-900 font-bold opacity-[0.9]'>Contact Us</h1>
                    <p className='mt-12 text-gray-800 text-lg font-semibold'>Head Office</p>
                    <p className='mt-3 text-gray-500 text-md font-semibold'>960 Holmdel Road, Suite 2-02, Holmdel, NJ 07733</p>
                    <p className='mt-3 text-gray-500 text-md font-semibold'><i className="text-red-400 fa-solid fa-envelope"></i> Email : <a href="" className='text-red-400'>assist@farmease.app</a></p>
                </div>

                <div className='flex-1'>
                    <h1 className='text-2xl pt-6 text-gray-900 font-bold opacity-[0.9]'>Reach Us Quickly</h1>
                    <form className="w-full mt-12 max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input className="cInput appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" required type="text" placeholder="Name*" />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <input className="cInput appearance-none block w-full rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="Email*" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input className="cInput appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="Mobile No." />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input className="cInput appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Subject" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <input className="cInput appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Message*" />
                            </div>
                            <button className="mt-32 bg-darkgreen ml-8 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs