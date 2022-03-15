import React, { useState, useEffect } from 'react'
import './Product.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { getEquip } from '../../api/equipments';
import { createBooking } from '../../api/bookingAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import instance from '../../api/config';
import Cookies from "js-cookie";

const Product = () => {
    const [visible, setVisible] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [equipment, setEquipment] = useState(null);
    const [invalidDate, setInvalidDate] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      const getEquipment = async () => {
        const { data } = await getEquip(params.id);
        setEquipment(data);
        // console.log(data);
      }
      getEquipment();
    }, [params.id])
    console.log(equipment);
    

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const formattedStartDate = format(new Date(startDate), "yyyy-MM-dd");
    const formattedEndDate = format(new Date(endDate), "yyyy-MM-dd");
    // const formattedStartTime = format(new Date(startDate), "hh-mm-dd");
    // console.log(formattedStartDate, "format start date");

    // const bookingData = {
    //     equipment: equipment?.id,
    //     start_data: formattedStartDate,
    //     end_date: formattedEndDate,
    //     start_time: '22:22',
    //     end_time: '01:01'
    // }

    const handleBooking = async () => {
        await createBooking(equipment?.id, formattedStartDate, formattedEndDate, "22:22", "01:01");
        // console.log(data);
        navigate('/booking-history');
        
    }
    var getDaysArray = function(start, end) {
        for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
            arr.push(new Date(dt));
        }
        return arr;
    };
    var arr = [];

    const fetchInvalid = () => {
      const getBookingVadidity = async () => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get('access-token')}`
        };
        const { data } = await instance.get(`/api/booking/?search=${equipment?.title}&ordering=start_date`, { headers });
        console.log(data, 'invalid dates');
        setInvalidDate(data);
      }
      getBookingVadidity();
      
    };

    invalidDate?.map(booking => (
        getDaysArray(booking.start_date, booking.end_date)?.map(item => (
            arr.push(item)
        ))

      ))

    const redirect = () => {
        window.location.href = 'http://localhost:3001/login';
        return null;
    }

    
    

    return (
        <div className=''>
            <div className='productHero'>
                <Carousel
                    autoplay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={3000}
                    // width="100%"
                    dynamicHeight="100%"
                >
                    <div className="relative">
                        <img style={{ height: '300px', width: '800px', objectFit: 'contain'}} src={equipment?.image_1} alt='' />
                    </div>
                    <div className="relative">
                        {equipment?.image_2 != null && <img style={{ height: '300px', width: '800px', objectFit: 'contain'}} src={equipment?.image_2} alt='' /> }
                    </div>
                    <div className="relative">
                        {equipment?.image_3 != null && <img style={{ height: '300px', width: '800px', objectFit: 'contain'}} src={equipment?.image_3} alt='' /> }
                    </div>
                    <div className="relative">
                        {equipment?.image_4 != null && <img style={{ height: '300px', width: '800px', objectFit: 'contain'}} src={equipment?.image_4} alt='' /> }
                    </div>
                    {
                        equipment?.image_5 != null && 
                    <div className="relative">
                        {<img style={{ height: '300px', width: '800px', objectFit: 'contain'}} src={equipment?.image_5} alt='' /> }
                    </div>
                    }
                    {/* <div>
                        <img style={{ height: '300px', objectFit: 'cover'}} src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt='' />
                    </div> */}
                </Carousel>
            </div>

            <div className='flex justify-around max-w-7xl mx-auto mt-12'>
                <div className='flex-1 w-56'>
                    <div className='flex justify-between border-b-2 pb-6 items-center'>
                        <div>
                            <h3 className='text-lg text-gray-500 font-bold'>{equipment?.manufacturer}</h3>
                            <h1 className='text-xl text-gray-800 font-bold'>{equipment?.title}</h1>
                        </div>
                        <div>
                            <i className="text-red-500 fa-solid fa-thumbs-up ml-1.5 text-xl"></i>
                            <p className='text-red-500 text-xs'>Add to Wishlist</p>
                        </div>
                    </div>
                    <div className='py-6 border-b-2'>
                        <h1 className='text-lg font-bold text-gray-800'>Description</h1>
                        <p className='text-sm font-bold text-gray-500 pt-2'>{equipment?.description}</p>
                    </div>

                    <h1 className='py-3 text-lg text-gray-700 font-bold'>Specifications</h1>
                    <div className='flex justify-between border-b-2 pb-6 items-center'>
                        <div>
                            <h3 className='text-md text-gray-500 font-bold'>Manufacturer</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>{equipment?.manufacturer}</h1>
                        </div>
                        <div>
                        <h3 className='text-md text-gray-500 font-bold'>Model</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>{equipment?.model}</h1>
                        </div>
                        <div>
                        <h3 className='text-md text-gray-500 font-bold'>Manufacturing Year</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>{equipment?.manufacturing_year}</h1>
                        </div>
                    </div>

                    <div className='flex justify-between border-b-2 py-6 items-center'>
                        <div>
                            <h3 className='text-md text-gray-500 font-bold'>Width</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>{equipment?.width}</h1>
                        </div>
                        <div>
                            <h3 className='text-md text-gray-500 font-bold'>Weight</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>2789 lbs.</h1>
                        </div>
                        <div>
                            <h3 className='text-md text-gray-500 font-bold'>Condition</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>{equipment?.condition}</h1>
                        </div>
                        <div>
                            <h3 className='text-md text-gray-500 font-bold'>Horsepower</h3>
                            <h1 className='text-sm text-gray-500 font-semibold'>{equipment?.horsepower} HP</h1>
                        </div>
                    </div>

                    <div className='py-6 flex justify-center border-b-2'>
                        <a href="/update-profile" className='font-semibold text-sm text-green-700'>Know Your Provider <i className="pl-1 fa-solid fa-angle-right"></i></a>
                    </div>

                    <div className='border-b-2 mb-10 py-6'>
                        <h1 className='text-lg font-bold text-gray-900'>Cancellation Policy</h1>
                        <p className='text-sm py-2 font-semibold text-gray-800'>Moderate</p>
                        <p className='text-sm font-semibold text-gray-800 pb-2'>Cancel up to 24 hours before booking and get a full refund.</p>
                        <a href="/policy" className='font-semibold text-sm text-blue-500'>Read more about the policy <i className="pl-1 fa-solid fa-angle-right"></i></a>
                    </div>

                </div>

                <div className='flex-1 w-32'>
                    <div className='border p-8 m-10'>
                        <h1 className='text-right text-lg font-bold border-b-2 pb-3'>Rs {equipment?.daily_rental} per day</h1>
                        <button onClick={() => {setVisible(!visible);fetchInvalid()}} className='px-3 py-1 border my-4 w-full text-md font-semibold text-gray-800 cursor-pointer'>Check Availability <i className="pl-2 fa-solid fa-angles-down"></i></button>
                        <div style={{ display: !visible &&  'none' }}>
                            <DateRangePicker style={{ height: '300px', width: '280px' }}
                                ranges={[selectionRange]}
                                minDate={new Date()}
                                // disabledDates={getDaysArray(invalidDate[1]?.start_date,invalidDate[1]?.end_date)}
                                disabledDates={arr}
                                rangeColors={["#68AC5D"]}
                                onChange={handleSelect}
                                // maxDate={new Date()}
                            />
                        </div>
                        {
                            Cookies.get('access-token') ? (
                                <button onClick={(e) => handleBooking(e)} className="bg-darkgreen hover:bg-[#8cdf80] text-white w-full font-semibold py-1 px-8 rounded">
                                    Book Now
                                </button>
                            ) : (
                                <button onClick={(e) => handleBooking(e)} className="bg-darkgreen opacity-50 cursor-not-allowed hover:bg-[#8cdf80] text-white w-full font-semibold py-1 px-8 rounded">
                                    Book Now
                                </button>
                            )
                        }
                        

                        <p className='text-md font-bold text-gray-500 text-center pt-4 pb-8 border-b-2'>You won’t be charged yet</p>

                        {
                            Cookies.get('access-token') ? (
                                <button onClick={()=>redirect()} className="bg-blue-500 hover:bg-blue-400 mt-8 text-white w-full font-semibold py-1 px-8 rounded">
                                    Chat now <i className="pl-4 fa-solid fa-comment"></i>
                                </button>
                            ) : (
                                <button className="bg-blue-500 hover:bg-blue-400 cursor-not-allowed opacity-50 mt-8 text-white w-full font-semibold py-1 px-8 rounded">
                                    Chat now <i className="pl-4 fa-solid fa-comment"></i>
                                </button>
                            )
                        }                            
                        
                    </div>
                    <p className='text-center'><i className="pr-2 text-red-500 fa-solid fa-flag"></i> <a className='text-red-500 font-semibold text-md underline-offset-2' onClick={() => navigate(`/equipment-report/${equipment?.id}`)}>Report this equipment</a></p>
                </div>
            </div>
        </div>
    )
}

export default Product