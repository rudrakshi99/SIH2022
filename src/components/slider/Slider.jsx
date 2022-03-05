import React from 'react'
import './Slider.css';

const Slider = () => {
    return (
        <input type="range" min="1" max="100" value="50" id='myRange' className='sliderItem' />
    )
}

export default Slider