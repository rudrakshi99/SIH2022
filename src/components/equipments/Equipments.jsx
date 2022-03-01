import React from 'react'
import './Equipments.css';

const images = [
    {
        "img": "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Tractors.jpg",
        "title": "Tractors"
    },
    {
        "img": "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Tillage_Equipment.jpg",
        "title": "Tillage Equipment"
    },
    {
        "img": "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Landscaping_Equipment.jpg",
        "title": "Seeding Equipments"
    },
    {
        "img": "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Tractors.jpg",
        "title": "Landscape Equipment"
    },
    {
        "img": "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Tractors.jpg",
        "title": "Crop Protection"
    },
    {
        "img": "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Tractors.jpg",
        "title": "Harvest Equipment"
    },
    {
        "img": "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Tractors.jpg",
        "title": "Post Harvest"
    },
    {
        "img": "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Tractors.jpg",
        "title": "Haulage"
    },
]

const Equipments = () => {
    return (
        <div className='my-6'>
            <div>
                <h1 className='text-center text-3xl font-medium my-10'>Sell New & Used Farm Equipment</h1>
                <div className='flex mx-[100px] justify-center flex-wrap items-center'>
                    {
                        images.map(image => (
                            <div className='imageEle'>
                                <h1 className='equipTitle'>{image.title}</h1>
                                <img className='equipImg' src={image.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Equipments