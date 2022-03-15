import React, { useEffect, useState } from 'react'
import './BookingRequest.css';
import pending from '../../img/Ellipse64.png';
import accepted from '../../img/Accepted.png';
import rejected from '../../img/Rejected.png';
import completed from '../../img/completed.png';
import progress from '../../img/Progress.png';
import { BookingListRequest, BookingUpdate } from '../../api/bookingAPI';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';


const BookingRequest = () => {
//     useEffect(() => {
//       const getData = async () => {
//         const { data } = await BookingListRequest();
//         console.log(data && data);
//       }
//       getData();
//     }, []);
    const [output, setOutput] = useState(null);

    const navigate = useNavigate();
    useEffect(() => {
        if(!Cookies.get('access-token')) {
            navigate('/');
        }
    }, []);
    const params = useParams();
    console.log(params);

    // useEffect(() => {
    //     const getDt = async () => {
    //         const headers = {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${Cookies.get('access-token')}`
    //         };
    //         const {data} =  await axios.get(`https://krishi-sadhan-app.herokuapp.com/api/booking/detail/${params.id}` , { headers });
    //         console.log(data);
    //         setOutput(data);
    //     }
    //     getDt();
    // }, [])
    
    console.log(output, "output");

    const handleAccept = async (id, status) => {
        // await BookingUpdate('Accepted', id);
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get('access-token')}`
        };
        await axios.patch(`https://krishi-sadhan-app.herokuapp.com/api/booking/update/${id}/` , { status }, { headers });
        alert('Booking has been confirmed');
    }
    
    return (
        <div className='my-6'>
            <div className='max-w-4xl mx-auto'>
                <div className='flex'>
                    <div className='w-1/2 border-b-2 py-2 text-gray-500 font-normal text-lg text-center'>Customer</div>
                    <div className='w-1/2 text-center border-l-2 border-b-2 py-2 border-[#68AC5D] text-[#68AC5D] font-normal text-lg'>Owner</div>
                </div>
            </div>

            <div className='max-w-7xl mt-16 mx-auto innerWrapper'>
                <div className='m-7'>
                    <div className='flex relative mb-10'>
                        <h1 className='absolute top-0 left-24 font-semibold text-gray-500 text-lg'>Booking Details</h1>
                        <p className='absolute top-0 right-24 text-[#68AC5D] font-semibold text-md'><i className="pr-2 fa-solid fa-arrow-left-long"></i> <span>Back</span></p>
                    </div>

                    <div className="flex flex-col border-b-2 pb-6">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                <thead className="border-b bg-gray-100 h-2">
                                    <tr>
                                        <th scope="col" className="text-center text-gray-600 text-md font-medium px-6 py-4">
                                            Date
                                        </th>
                                        <th className="text-gray-600 text-md font-medium px-6 py-4 text-center" scope="col">
                                            Booking Id
                                        </th>
                                        <th scope="col" className="text-gray-600 text-md font-medium px-6 py-4 text-center">
                                            Equipment name
                                        </th>
                                        <th scope="col" className="text-gray-600 text-md font-medium px-6 py-4 text-center">
                                            Manufacturer
                                        </th>
                                        <th scope="col" className="text-gray-600 text-md font-medium px-6 py-4 text-center">
                                            Request status
                                        </th>
                                        <th scope="col" className="text-gray-600 text-md font-medium px-6 py-4 text-center">
                                            From/To Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white py-6">
                                        <td className="text-gray-600 font-normal text-center text-md px-6 py-4 whitespace-nowrap">
                                            24/02/2021
                                        </td>
                                        <td className="text-gray-600 font-normal text-center text-md px-6 py-4 whitespace-nowrap">
                                            58749132
                                        </td>
                                        <td className="text-gray-600 font-normal text-center text-md px-6 py-4 whitespace-nowrap">
                                            JCB Machine
                                        </td>
                                        <td className="text-gray-600 font-normal text-center text-md px-6 py-4 whitespace-nowrap">
                                            Parth Sharma 
                                        </td>
                                        <td className="text-gray-600 font-normal text-center text-md px-6 py-4 whitespace-nowrap">
                                           <span style={{height: '12px', width: '12px', background: '#FFD233'}}></span> Pending
                                        </td>
                                        <td className="text-gray-600 font-normal text-center text-md px-6 py-4 whitespace-nowrap">
                                            26/02 - 28/3/2020
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-around my-4'>
                        <div className='border-2 rounded-3xl p-5 w-1/5'>
                            <h1 className='text-md text-gray-500 font-normal'>Customer Details</h1>
                            <p className='text-sm text-gray-700 font-semibold py-2'>Kushal Gautam</p>
                            <p className='text-sm text-gray-500 pt-2 font-normal'><i className="text-sm text-gray-400 pr-1 fa-solid fa-phone"></i> 84450 45465(optional)</p>
                            <p className='text-sm text-gray-500 pt-2 font-normal'><i className="text-sm text-gray-400 pr-1 fa-solid fa-location-dot"></i> JSS Boys Hostel, <br /> Block C, Sector-62, NOIDA</p>
                        </div>
                        <div className='border-2 rounded-3xl p-5 w-1/5'>
                            <h1 className='text-md text-gray-500 font-normal'>Owner Details</h1>
                            <p className='text-sm text-gray-700 font-semibold py-2'>Parth Sharma</p>
                            <p className='text-sm text-gray-500 pt-2 font-normal'><i className="text-sm text-gray-400 pr-1 fa-solid fa-phone"></i> 70606 26729 (optional)</p>
                            <p className='text-sm text-gray-500 pt-2 font-normal'><i className="text-sm text-gray-400 pr-1 fa-solid fa-location-dot"></i> JSS Boys Hostel, <br /> Block C, Sector-62, NOIDA</p>
                        </div>
                        <div className='border-2 rounded-3xl p-5 w-1/5'>
                            <h1 className='text-md text-gray-500 font-normal'>Rent Details</h1>
                            <div className='flex justify-between my-3'>
                                <p className='text-sm font-normal text-[#4F4F4F]'>Total</p>
                                <p className='text-sm font-normal text-[#4F4F4F]'>Rs 862.56 / day</p>
                            </div>
                            <div className='flex justify-between mb-3'>
                                <p className='text-sm font-normal text-[#4F4F4F]'>No. of days</p>
                                <p className='text-sm font-normal text-[#4F4F4F]'>2 days</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-md font-bold text-gray-600'>Sub Total</p>
                                <p className='text-md font-bold text-[#68AC5D]'>Rs 1125.12 </p>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center my-10'>
                        <div className=''>
                            <h1 className='text-xl font-semibold text-gray-600 my-6'>Accept / Reject Booking</h1>
                            <div className='flex justify-between'>
                                <button onClick={(e) => handleAccept(params.id, 'Accepted')} className="-ml-10 mr-10 bg-[#F5F5FA] hover:bg-gray-200 text-green-400 font-bold py-1 px-8 rounded">
                                    Accept
                                </button>
                                <button onClick={(e) => handleAccept(params.id, 'Rejected')} className="ml-10 bg-[#F5F5FA] hover:bg-gray-200 text-red-400 font-bold py-1 px-8 rounded">
                                    Reject
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Stepper */}


                    <div className="p-5 mb-10">
                        <div className="mx-14 p-4">
                        <div className="flex items-center">
                        <div className="flex items-center relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12">
                                <img src={pending} className="mb-10" width="100%" height="100%"></img>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Personal</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out linebg"></div>
                      
                                <div className="flex items-center relative">
                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12">
                                    <img src={accepted} className="mb-10" width="100%" height="100%"></img>
                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Personal</div>
                                </div>
                                <div className="flex-auto border-t-2 transition duration-500 ease-in-out linebg1"></div>
                                <div className="flex items-center text-white relative">
                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12">
                                    <img src={rejected} className="mb-10" width="100%" height="100%"></img>
                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Account</div>
                                </div>
                                <div className="flex-auto border-t-2 transition duration-500 ease-in-out linebg2"></div>
                                  <div className="flex items-center text-gray-500 relative">
                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 ">
                                    <img src={progress} className="mb-10" width="100%" height="100%"></img>
                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Message</div>
                                </div>
                                <div className="flex-auto border-t-2 transition duration-500 ease-in-out linebg3"></div>
                                <div className="flex items-center text-gray-500 relative">
                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12">
                                    <img src={completed} className="mb-10" width="100%" height="100%"></img>
                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Confirm</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* product table */}

                    <div className="flex flex-col border-b-2 pb-6">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                <thead className="border-b bg-gray-100 h-2">
                                    <tr>
                                        <th scope="col" className="text-center text-gray-600 text-md font-medium px-6 py-4">
                                            Product ID
                                        </th>
                                        <th className="text-gray-600 text-md font-medium px-6 py-4 text-center" scope="col">
                                            Product
                                        </th>
                                        <th scope="col" className="text-gray-600 text-md font-medium px-6 py-4 text-center">
                                            Price
                                        </th>
                                        <th scope="col" className="text-gray-600 text-md font-medium px-6 py-4 text-center">
                                            Manufacturer
                                        </th>
                                        <th scope="col" className="text-gray-600 text-md font-medium px-6 py-4 text-center">
                                            Subtotal
                                        </th>
                                        <th scope="col" className="text-gray-600 text-md font-medium px-6 py-4 text-center">
                                            Product Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white py-6">
                                        <td className="text-gray-700 font-medium text-center text-md px-6 py-4 whitespace-nowrap">
                                            EQ896
                                        </td>
                                        <td className="text-gray-700 font-medium text-center text-md px-6 py-4 whitespace-nowrap">
                                            Shovel
                                        </td>
                                        <td className="text-gray-600 font-normal text-center text-md px-6 py-4 whitespace-nowrap">
                                            862.56
                                        </td>
                                        <td className="text-gray-600 font-normal text-center text-md px-6 py-4 whitespace-nowrap">
                                            John Dheer
                                        </td>
                                        <td className="text-gray-600 font-normal text-center text-md px-6 py-4 whitespace-nowrap">
                                            862.56
                                        </td>
                                        <td className="text-[#68AC5D] font-medium text-center text-md px-6 py-4 whitespace-nowrap">
                                            <button onClick={navigate(`/product/${params.id}`)}>View Details </button>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default BookingRequest