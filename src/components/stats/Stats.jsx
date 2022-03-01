import React from 'react'
import './Stats.css';
import coins2 from '../../img/coins2.png';
import rupees from '../../img/rupees.png';
import Frame3 from '../../img/Frame3.png';

const Stats = () => {
    return (
        <div className='h-2/5 my-6 bg-#E5E5E5'>
            <div className='flex items-center justify-center mx-20'>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <img className='statsImg' src={coins2} alt="" />
                    <h1 className='text-lg font-bold'>INR 954.3 Billion</h1>
                    <p className='text-sm font-normal'>Agriculture Equipment <br /> Market Value</p>
                </div>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <img className='statsImg' src={rupees} alt="" />
                    <h1 className='text-lg font-bold'>INR 10,218</h1>
                    <p className='text-sm font-normal'>Farmer’s Average <br />  Monthly Income</p>
                </div>
                <div className='flex flex-1 flex-col justify-center items-center'>
                    <img className='makeUp1' src={Frame3} alt="" />
                    {/* <div className='relative justify-center items-center'>
                        <img className='makeUp1' src={Ellipse4} alt="" />
                        <img className='makeUp2' src={Ellipse5} alt="" />
                    </div> */}
                    <h1 className='text-lg font-bold'>16% of Crop value</h1>
                    <p className='text-sm font-normal'>Average Equipment <br /> Investments</p>
                </div>
            </div>
        </div>
    )
}

export default Stats