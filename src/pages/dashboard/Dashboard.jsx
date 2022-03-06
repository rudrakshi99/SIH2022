import React, { useEffect, useState } from 'react'
import './Dashboard.css';
import ProductItem from '../../components/dashboardComponent/product/ProductItem';
import Dropdown from '../../components/dropdown/Dropdown';
import { getEquips } from '../../api/equipments';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const [equipments, setEquipments] = useState(null);
    useEffect(() => {
      const getEquipments = async () => {
        const { data } = await getEquips();
        setEquipments(data);
        // console.log(data);
      }
      getEquipments();
    }, [])

    return (
        <>
            <div className='h-4 w-full my-4 bg-[#D8F5DE]'></div>
            <div className='max-w-6xl my-10 mx-auto'>
                <div className='mt-4'>
                    <div className='flex justify-around'>
                        <h1 className='text-2xl font-bold text-gray-600 text-right'>Search Equipments</h1>
                        <div className=''>
                            <div className="input-group relative flex items-stretch w-full mb-4">
                                    <input type="search" className="searchInput form-control relative flex-auto min-w-0 block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter your Equipment here......" aria-label="Search" aria-describedby="button-addon3" />
                                    <button className="searchBtn btn inline-block px-6 py-3 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 cursor-pointer focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                            </div>
                        </div>
                    </div>

                    <h1 className='mt-4 mb-10 text-md font-semibold text-gray-500 text-center'>Search your desired Equipments directly by entering a keyword or the whole name.</h1>

                    <div className='flex justify-around w-full'>
                        <div className='w-1/4'>
                            <div className='bg-[#68AC5D] py-4 px-1 prFilter'>
                                <h1 className='text-lg font-bold text-center text-white'>Product Filters</h1>
                            </div>

                            <div className='border py-6'>
                                <span className='text-lg mb-4 font-semibold text-[#4F4F4F] border-b-2 border-[#68AC5D] pb-1 ml-6'>Categories:</span>

                                <div className='my-5'>
                                    <Dropdown title="Tractors" />
                                    <Dropdown title="Tillage Equipment" />
                                    <Dropdown title="Seeding Equipment" />
                                    <Dropdown title="Landscaping Equip" />
                                    <Dropdown title="Landscaping Equip" />
                                    <Dropdown title="Landscaping Equip" />
                                    <Dropdown title="Landscaping Equip" />
                                    <Dropdown title="Landscaping Equip" />
                                </div>

                                <span className='text-lg mb-4 font-semibold text-[#4F4F4F] border-b-2 border-[#68AC5D] pb-1 ml-6'>Brands</span>

                                <div className='my-5'>
                                    <Dropdown title="Mahindra" />
                                    <Dropdown title="John Deere" />
                                    <Dropdown title="CLAAS India" />
                                </div>

                                <span className='text-lg mb-4 font-semibold text-[#4F4F4F] border-b-2 border-[#68AC5D] pb-1 ml-6'>Price Range</span>

                                <div className='my-5'>
                                    <p className='text-md font-semibold text-[#4F4F4F] pl-8'>Price per day</p>
                                    <input type="range" id="customRange1"
                                        className="form-range text-green-100 appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                                    />
                                    <p className='text-md mb-3 font-normal text-[#4F4F4F] pl-8'>Rs. 0 to 1,49,827</p>

                                    <p className='text-md font-semibold text-[#4F4F4F] pl-8'>Price per hour</p>
                                    <input type="range" id="customRange1"
                                        className="form-range text-green-100 appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                                    />
                                    <p className='text-md mb-3 font-normal text-[#4F4F4F] pl-8'>Rs. 42 to 49,827</p>

                                    <p className='text-md font-semibold text-[#4F4F4F] pl-8'>Distance from You</p>
                                    <input type="range" id="customRange1"
                                        className="form-range text-green-100 appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                                    />
                                    <p className='text-md font-normal text-[#4F4F4F] pl-8'>0 KM to 6.6 KM</p>
                                </div>

                                <span className='text-lg mb-4 font-semibold text-[#4F4F4F] border-b-2 border-[#68AC5D] pb-1 ml-6'>Availability Date</span>

                                <p className='text-md pt-2 font-normal text-[#4F4F4F] pl-6'>From</p>

                                <div className='flex justify-center items-center'>
                                    <button className="bg-darkgreen hover:bg-green-700 text-white font-normal text-sm py-1 text-center w-1/2 my-4 px-2 rounded">
                                        DD-MM-YYYY
                                    </button>
                                    <i className="ml-4 text-lg text-[#68AC5D] fa-solid fa-calendar"></i>
                                </div>


                                <p className='text-md font-normal text-[#4F4F4F] pl-6'>To</p>
                                <div className='flex justify-center items-center'>
                                    <button className="bg-darkgreen hover:bg-green-700 text-white font-normal text-sm py-1 text-center w-1/2 my-4 px-2 rounded">
                                        DD-MM-YYYY
                                    </button>
                                    <i className="ml-4 text-lg text-[#68AC5D] fa-solid fa-calendar"></i>
                                </div>

                            </div>

                            <div className='w-11/12'>
                                <div className='bg-[#68AC5D] -mt-5 py-4 ml-10 px-1 prFilter'>
                                    <h1 className='text-lg font-bold text-center text-white'>Set Date</h1>
                                </div>
                            </div>
                            


                        </div>

                        <div className='w-3/4 ml-8'>
                            <div className='relative flex justify-around'>
                                <h1 className='absolute top-0 left-0 text-2xl font-bold text-gray-600'>Featured Products</h1>
                                <button className="absolute top-0 right-10 shadow-md bg-darkgreen mx-auto hover:bg-green-700 text-white text-md font-normal py-1.5 px-3 rounded">
                                    More <i className="pl-1 w-5 fa-solid fa-angle-right"></i>
                                </button>
                            </div>

                            <div className='flex flex-wrap items-center'>
                                <div className='flex justify-around flex-wrap my-12'>
                                    {
                                        equipments?.map(equipment => (
                                            <ProductItem key={equipment.id} equipment={equipment} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div className='relative flex justify-around'>
                                <h1 className='absolute top-0 left-0 text-2xl font-bold text-gray-600'>All Products</h1>
                                <a className='absolute top-0 right-10 mx-auto hover:bg-green-700 text-green-600 text-sm font-normal'>View All</a>
                            </div>

                            <div className='flex flex-wrap items-center'>
                                <div className='flex justify-around flex-wrap my-12'>
                                    {
                                        equipments?.map(equipment => (
                                            <ProductItem key={equipment.id} equipment={equipment} />
                                        ))
                                    }
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard