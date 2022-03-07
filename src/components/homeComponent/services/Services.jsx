import React from 'react'
import './Services.css'
import services4 from '../../../img/services4.png';

const Services = () => {
    return (
        <div className='bg-evergreen bg-grey my-10'>
            <div className='flex justify-center flex-col'>
                <h1 className='text-4xl mt-2 font-bold m-auto'>Our Services</h1>
                <p className='mt-3 text-sm m-auto'>Following are the services that Krishi Sadhan market provides for Farmers:</p>
                <img src={services4} className='serviceImg' alt="" />
            </div>
        </div>
    )
}

export default Services