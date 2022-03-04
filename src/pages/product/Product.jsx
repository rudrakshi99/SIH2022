import React, { useState } from 'react'
import './Product.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const Product = () => {
    // const [value, onChange] = useState(new Date());
    const [visible, setVisible] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className=''>
            <div>
                <Carousel
                    autoplay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={3000}
                    // width="50%"
                    // dynamicHeight="50%"
                >
                    <div className="relative">
                        <img style={{ height: '300px', objectFit: 'cover'}} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
                    </div>
                    <div>
                        <img style={{ height: '300px', objectFit: 'cover'}} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
                    </div>
                </Carousel>
            </div>

            <div className='flex justify-around max-w-7xl mx-auto mt-12'>
                <div className='flex-1 w-56'>
                    <div className='flex justify-between border-b-2 pb-6 items-center'>
                        <div>
                            <h3 className='text-lg text-gray-500 font-bold'>John Deere</h3>
                            <h1 className='text-xl text-gray-800 font-bold'>3 Way Tipping Trailer</h1>
                        </div>
                        <div>
                            <i className="text-red-500 fa-solid fa-thumbs-up"></i>
                            <p className='text-red-500 text-xs'>Add to Wishlist</p>
                        </div>
                    </div>
                    <div className='py-6 border-b-2'>
                        <h1 className='text-lg font-bold text-gray-800'>Description</h1>
                        <p className='text-sm font-bold text-gray-500 pt-2'>Hassle-free, reliable, effective & easy to operate power mast which saves both time & energy.</p>
                    </div>

                    <h1 className='py-3 text-lg text-gray-700 font-bold'>Specifications</h1>
                    <div className='flex justify-between border-b-2 pb-6 items-center'>
                        <div>
                            <h3 className='text-md text-gray-500 font-bold'>Manufacturer</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>John Deere</h1>
                        </div>
                        <div>
                        <h3 className='text-md text-gray-500 font-bold'>Model</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>JD-2012</h1>
                        </div>
                        <div>
                        <h3 className='text-md text-gray-500 font-bold'>Manufacturing Year</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>2001</h1>
                        </div>
                    </div>

                    <div className='flex justify-between border-b-2 py-6 items-center'>
                        <div>
                            <h3 className='text-md text-gray-500 font-bold'>Width</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>50 ft</h1>
                        </div>
                        <div>
                            <h3 className='text-md text-gray-500 font-bold'>Weight</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>2789 lbs.</h1>
                        </div>
                        <div>
                            <h3 className='text-md text-gray-500 font-bold'>Condition</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>new</h1>
                        </div>
                        <div>
                            <h3 className='text-md text-gray-500 font-bold'>Horsepower</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>50 HP</h1>
                        </div>
                    </div>

                    <div className='py-6 flex justify-center border-b-2'>
                        <a href="" className='font-semibold text-sm text-red-500'>Know Your Provider <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='border-b-2 mb-10 py-6'>
                        <h1 className='text-lg font-bold text-gray-900'>Cancellation Policy</h1>
                        <p className='text-sm py-2 font-semibold text-gray-800'>Moderate</p>
                        <p className='text-sm font-semibold text-gray-800 pb-2'>Cancel up to 24 hours before booking and get a full refund.</p>
                        <a href="" className='font-semibold text-sm text-red-500'>Read more about the policy <i class="fa-solid fa-angle-right"></i></a>
                    </div>

                </div>

                <div className='flex-1 w-32'>
                    <div className='border p-8 m-10'>
                        <h1 className='text-right text-lg font-bold border-b-2 pb-3'>$45 per day</h1>
                        <button onClick={() => setVisible(!visible)} className='px-3 py-1 border my-4 w-full text-md font-semibold text-gray-800'>Check Availability <i className="pl-2 fa-solid fa-angles-down"></i></button>
                        <div style={{ display: !visible &&  'none' }}>
                            <DateRangePicker style={{ height: '300px', width: '280px' }}
                                ranges={[selectionRange]}
                                minDate={new Date()}
                                rangeColors={["#FD5B61"]}
                                onChange={handleSelect}
                            />
                        </div>
                        <button data-tooltip-target="tooltip-animation" className="bg-red-500 hover:bg-red-300 text-white w-full font-semibold py-1 px-8 rounded">
                            Book Now
                        </button>
                        <div id="tooltip-animation" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                            Tooltip content
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>

                        <p className='text-md font-bold text-gray-500 text-center pt-4 pb-8 border-b-2'>You won’t be charged yet</p>

                        <button className="bg-darkgreen hover:bg-green-700 mt-8 text-white w-full font-semibold py-1 px-8 rounded">
                            Buy @ $8500
                        </button>
                    </div>
                    <p className='text-center'><i className="pr-2 text-red-500 fa-solid fa-flag"></i> <a className='text-red-500 font-semibold text-md underline-offset-2' href="">Report this equipment</a></p>
                </div>
            </div>
        </div>
    )
}

export default Product