import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { submitFeedback } from '../../api/equipments';
import './Feedback.css';

const initial_values = {
    name: '',
    phone_number: '',
    description: ''
}

const Feedback = () => {
    const [feedback, setFeedback] = useState(initial_values);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data} =await submitFeedback(feedback);
        console.log(data);

        if(data.success && data.success === true) {
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                navigate('/dashboard');
            }, 4000);
        }
    }


    return (
        <div>
            <div class="flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-6">
                <div>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Feedback form
                    </h2>
                </div>

                <div class="rounded bg-white max-w-md overflow-hidden shadow-xl p-5">

                    <form class="space-y-4" onSubmit={handleSubmit} method="POST">
                        <input type="hidden" name="remember" value="True" />
                        <div class="rounded-md shadow-sm -space-y-px">
                            <div class="grid gap-6">
                                <div class="col-span-12">
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-700">Name</label>
                                    <input onChange={(e) => handleChange(e)} type="text" name="name" id="name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>

                                <div class="col-span-12 mt-3">
                                    <label for="email_address" class="block mb-2 text-sm font-medium text-gray-700">Phone number</label>
                                    <input onChange={(e) => handleChange(e)} type="text" name="phone_number" id="phone_number" autocomplete="given-number" class="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>

                                <div class="col-span-12 mt-3">
                                    <label for="email_address" class="block mb-2 text-sm font-medium text-gray-700">Description</label>
                                    <textarea onChange={(e) => handleChange(e)} rows={6} cols={10} type="text" name="description" id="description" autocomplete="description" class="mt-1 focus:ring-indigo-500 outline-none focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#68AC5D] hover:bg-[#69a360] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Submit
                            </button>
                        </div>
                    </form>

                    {
                        // setTimeout(() => {
                            success && <h1 className='text-md flex justify-center mt-6  text-darkgreen font-semibold'>Thanks for your feedback</h1>
                        // }, 3000)
                    }
            </div>
        </div>

        </div>
        </div>
    )
}

export default Feedback