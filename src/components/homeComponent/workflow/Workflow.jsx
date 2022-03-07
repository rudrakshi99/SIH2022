import React from 'react'
import './Workflow.css';
import Rectangle73 from '../../../img/Rectangle73.png';

const Workflow = () => {
    return (
        <div className='h-1/2 mb-10 py-12 bg-evergreen'>
            <div className='flex justify-around items-center'>
                <div>
                    <h1 className='text-4xl font-bold uppercase mb-4'>How KRISHI SADHAN works?</h1>
                    <p className='text-md font-medium uppercase mb-4'>TAKE A LOOK AT OUR <span className='text-emerald-600'>PLATFORM DEMO</span>:</p>
                    <ul className='list-decimal ml-4'>
                        <li className='text-md mr-4 my-1 font-medium'>Sign-up to the platform.</li>
                        <li className='text-md mr-4 my-1 font-medium'>Post your ad for the off-season.</li>
                        <li className='text-md mr-4 my-1 font-medium'>Provide equipment details.</li>
                        <li className='text-md mr-4 my-1 font-medium'>Explore and filter lists of equipment.</li>
                        <li className='text-md mr-4 my-1 font-medium'>Check an available time slot.</li>
                        <li className='text-md mr-4 my-1 font-medium'>Chat with the owner and make a booking..</li>
                        <li className='text-md mr-4 my-1 font-medium'>Stay updated by SMS.</li>
                    </ul>
                </div>
                <div>
                    <img src={Rectangle73} className='youtubeImg' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Workflow