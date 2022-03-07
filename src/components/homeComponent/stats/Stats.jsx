import React from 'react'
import './Stats.css';
import people from '../../../img/people.png';
import people1 from '../../../img/people1.png';
import Frame3 from '../../../img/Frame3.png';

const Stats = () => {
    return (
        <div className='py-9 bg-#E5E5E5'>
            <div className='flex items-center justify-center mx-20'>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <img className='statsImg' src={people1} alt="" />
                    <h1 className='text-2xl font-bold'>INR 954.3 Billion</h1>
                    <p className='text-lg font-normal w-1/2 text-center'>Agriculture Equipment <br /> Market Value</p>
                </div>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <img className='statsImg' src={people} alt="" />
                    <h1 className='text-2xl font-bold'>INR 10,218</h1>
                    <p className='text-lg font-normal w-1/2 text-center'>Farmer’s Average <br />  Monthly Income</p>
                </div>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <img className='makeUp1' src={Frame3} alt="" />
                    {/* <div className='relative justify-center items-center'>
                        <img className='makeUp1' src={Ellipse4} alt="" />
                        <img className='makeUp2' src={Ellipse5} alt="" />
                    </div> */}
                    <h1 className='text-2xl font-bold'>16% of Crop value</h1>
                    <p className='text-lg font-normal w-1/2 text-center'>Average Equipment Investments</p>
                </div>
            </div>
        </div>
    )
}

export default Stats