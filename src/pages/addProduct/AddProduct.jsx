import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddProduct.css';

const AddProduct = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!Cookies.get('access-token')) {
            navigate('/');
        }
    }, []);
    return (
        <div>
            <div className='my-10 max-w-6xl mx-auto'>
                <div className='border-l-2 border-green-600 pl-6'>
                    <h1 className='text-2xl font-semibold text-gray-700'>Describe Your Equipment</h1>
                    <p className='text-md font-semibold mt-2 text-gray-500'>Provide key details of your equipment to Sell Or Rent Out</p>
                </div>

                <form className="w-full mt-12 max-w-8xl">
                        <div className="flex flex-wrap -mx-3 mb-6">

                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <select className="form-select form-select-lg mb-3 appearance-none block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example">
                                    <option selected>select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="w-1/2 md:w-1/2 px-3 border p-2">
                                <label for="exampleInputEmail1" className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2 text-gray-700">Email*</label>
                                <input className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="abc@gmail.com" />
                            </div>

                            <div className="w-1/2 md:w-1/2 px-3 mb-6 border p-2 md:mb-0">
                                <label for="exampleInputEmail1" className="form-label text-sm font-bold text-gray-500 inline-block pl-2 mb-2 text-gray-700">Add Equipment Images*</label>
                                <input className="cInput appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="file" placeholder="Mobile No." />
                            </div>

                            <div className="w-full md:w-1/2 px-3 mb-6 border p-2 m-3 md:mb-0">
                                <label for="exampleInputEmail1" className="form-label text-sm font-bold text-gray-500 inline-block pl-2 mb-2 text-gray-7000">Selling Price (Rs)</label>
                                <input className="cInput appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="number" placeholder="Subject" />
                            </div>

                            <div className="w-full md:w-1/2 px-3 mb-6 border p-2 md:mb-0">
                                <label for="exampleInputEmail1" className="form-label text-sm font-bold text-gray-500 inline-block pl-2 mb-2 text-gray-700">Are you open to Rent?</label>
                                <input className="cInput appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="checkbox" />
                            </div>

                            <button className="mt-32 bg-darkgreen ml-8 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full">
                                Send Message
                            </button>

                        </div>
                    </form>

            </div>
        </div>
    )
}

export default AddProduct