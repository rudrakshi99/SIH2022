import React from "react";
import "./Equipments.css";

const images = [
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Tractors.jpg",
    title: "Tractors"
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Tillage_Equipment.jpg",
    title: "Tillage Equipment"
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Seeding_Equipment.jpg",
    title: "Seeding Equipments"
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Landscaping_Equipment.jpg",
    title: "Landscape Equipment"
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Crop_Protection.jpg",
    title: "Crop Protection"
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Harvest_Equipment.jpg",
    title: "Harvest Equipment"
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Post_Harvest.jpg",
    title: "Post Harvest"
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Haulage.jpg",
    title: "Haulage"
  }
];

const Equipments = () => {
  return (
    <div className="my-6">
      <div className="mx-16">
        <h1 className="text-center text-3xl font-medium my-10">
          Sell New & Used Farm Equipment
        </h1>
        <div className="grid grid-cols-4 gap-8 mb-[100px]">
          {images.map((image) => (
            <div key={image.title} className="w-full relative">
              <h1 className="equipTitle">{image.title}</h1>
              <img className="equipImg" src={image.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
