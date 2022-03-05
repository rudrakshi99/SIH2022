import React from "react";
import './ProductItem.css';
import item1 from '../../../img/item1.png';

const ProductItem = () => {
    return (
        <div className="my-6">
            <div className="mx-2 itemDiv p-4">
                <img style={{ height: '220px', width: '230px', objectFit: 'cover' }} src={item1} alt="" />
                <div className="flex justify-around my-2 p-3">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-500">Tractor</h1>
                        <span className="text-xs font-semibold text-gray-700">4.5</span>
                        <span className="fa fa-star checked text-xs text-yellow-400"></span>
                        <span className="fa fa-star checked text-xs text-yellow-400 font-semibold"></span>
                        <span className="fa fa-star checked text-xs text-yellow-400 font-semibold"></span>
                        <span className="fa fa-star text-xs text-yellow-400 font-semibold"></span>
                        <span className="fa fa-star text-xs text-yellow-400 font-semibold"></span>
                    </div>
                    <p className="text-sm font-semibold text-gray-500 pt-3">Manufacturer</p>
                </div>

                <p className="text-lg font-bold text-gray-600">Rs 5,25,575 per Day</p>

                <button className="bg-darkgreen hover:bg-green-700 text-white font-bold py-1 text-center w-full my-4 px-8 rounded">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
