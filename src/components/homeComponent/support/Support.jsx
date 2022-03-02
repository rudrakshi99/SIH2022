import React from 'react'
import './Support.css';
import vector11 from '../../../img/Vector11.png';
import vector22 from '../../../img/Vector22.png';
import vector33 from '../../../img/Vector33.png';

const Support = () => {
    return (
        <div className='h-2/5 mt-4'>
            <div className='flex justify-center items-center'>
                <div className='supportItem mx-5 p-9'>
                    <img className='supportImg' src={vector11} alt="" />
                    <h3 className='text-lg font-semibold mt-5'>24*7 customer support</h3>
                    <p className='text-xs text-center font-normal'>We’re just one call away.</p>
                </div>
                <div className='supportItem mx-5 p-9'>
                    <img className='supportImg' src={vector22} alt="" />
                    <h3 className='text-lg font-semibold mt-5'>24*7 customer support</h3>
                    <p className='text-xs text-center font-normal'>We’re just one call away.</p>
                </div>
                <div className='supportItem mx-5 p-9'>
                    <img className='supportImg' src={vector33} alt="" />
                    <h3 className='text-lg font-semibold mt-5'>24*7 customer support</h3>
                    <p className='text-xs text-center font-normal'>We’re just one call away.</p>
                </div>
            </div>
        </div>
    )
}

export default Support