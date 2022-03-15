import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRangePicker } from "react-date-range";
import { createEquipment, getBrands, getEquips } from "../../api/equipments";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AddProduct = () => {
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [equipments, setEquipments] = useState([]);
  const [brands, setBrands] = useState([]);
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();
  const [data, setData] = useState({
    owner: 54,
    manufacturer: 0,
    title: "",
    description: "",
    equipment_type: 1,
    available_start_time: new Date().toISOString().slice(0, 10),
    available_end_time: new Date().toISOString().slice(0, 10),
    equipment_location: "",
    daily_rental: 0,
    hourly_rental: 0,
    manufacturing_year: 0,
    model: "",
    condition: "",
    horsepower: 0,
    width: 0,
    height: 0,
  });

    useEffect(() => {
        if(!Cookies.get('access-token')) {
            navigate('/');
        }
    }, []);
  

  useEffect(() => {
    const getEquipment = async () => {
      const { data } = await getEquips();
      setEquipments(data);
      // console.log(data);
    };
    const getBrand = async () => {
      const { data } = await getBrands();
      setBrands(data);
      // console.log(data);
    };
    getEquipment();
    getBrand();
  }, []);

  const handleCreateEquipment = async (e) => {
    e.preventDefault();
    const res = await createEquipment(data);
    if (res.data.success) {
      alert(res.data.message);
      navigate("/booking-history");
    }
    console.log(data);
    console.log(res);
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div>
      <div className="my-10 max-w-6xl mx-auto">
        <div className="border-l-2 border-green-600 pl-6">
          <h1 className="text-2xl font-semibold text-gray-700">
            Describe Your Equipment
          </h1>
          <p className="text-md font-semibold mt-2 text-gray-500">
            Provide key details of your equipment to Sell Or Rent Out
          </p>
        </div>

        <form
          onSubmit={handleCreateEquipment}
          className="w-full mt-12 max-w-8xl"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-1/2 md:w-1/2 px-3 border p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Title*
              </label>
              <input
                className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="abc@gmail.com"
                value={data.title}
                onChange={(e) => {
                  setData({ ...data, title: e.target.value });
                }}
              />
            </div>

            <div className="w-1/2 md:w-1/2 px-3 border flex flex-col p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Manufacturer*
              </label>
              <select
                onChange={(e) =>
                  setData({ ...data, manufacturer: e.target.value })
                }
                className="w-32"
              >
                <option disabled>Choose Brand</option>
                {brands.map((item, i) => {
                  return (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-1/2 md:w-1/2 px-3 border p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Description*
              </label>
              <input
                className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="abc@gmail.com"
                value={data.description}
                onChange={(e) => {
                  setData({ ...data, description: e.target.value });
                }}
              />
            </div>

            <div className="w-1/2 md:w-1/2 px-3 border p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Daily Rental*
              </label>
              <input
                className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="abc@gmail.com"
                value={data.daily_rental}
                onChange={(e) => {
                  setData({ ...data, daily_rental: e.target.value });
                }}
              />
            </div>
            <div className="w-1/2 md:w-1/2 px-3 border p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Hourly Rental*
              </label>
              <input
                className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="abc@gmail.com"
                value={data.hourly_rental}
                onChange={(e) => {
                  setData({ ...data, hourly_rental: e.target.value });
                }}
              />
            </div>

            <div className="w-1/2 md:w-1/2 px-3 border p-2 flex flex-col">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Equipment Type*
              </label>
              <select
                onChange={(e) =>
                  setData({ ...data, equipment_type: e.target.value })
                }
                className="w-32"
              >
                <option disabled>Choose Equipment Type</option>
                {equipments.map((item, i) => {
                  return (
                    <option key={i} value={item.id}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="w-1/2 md:w-1/2 px-3 border p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Manufacturing Year*
              </label>
              <input
                className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="abc@gmail.com"
                value={data.manufacturing_year}
                onChange={(e) => {
                  setData({ ...data, manufacturing_year: e.target.value });
                }}
              />
            </div>
            <div className="w-1/2 md:w-1/2 px-3 border p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Model*
              </label>
              <input
                className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="abc@gmail.com"
                value={data.model}
                onChange={(e) => {
                  setData({ ...data, model: e.target.value });
                }}
              />
            </div>

            <div className="w-1/2 md:w-1/2 px-3 border p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Condition*
              </label>
              <input
                className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="abc@gmail.com"
                value={data.condition}
                onChange={(e) => {
                  setData({ ...data, condition: e.target.value });
                }}
              />
            </div>

            <div className="w-1/2 md:w-1/2 px-3 border p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Equipment Location*
              </label>
              <input
                className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="abc@gmail.com"
                value={data.equipment_location}
                onChange={(e) => {
                  setData({ ...data, equipment_location: e.target.value });
                }}
              />
            </div>

            <div className="w-1/2 md:w-1/2 px-3 border p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                HorsePower*
              </label>
              <input
                className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="abc@gmail.com"
                value={data.horsepower}
                onChange={(e) => {
                  setData({ ...data, horsepower: e.target.value });
                }}
              />
            </div>

            <div className="w-1/2 md:w-1/2 px-3 border p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Height*
              </label>
              <input
                className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="abc@gmail.com"
                value={data.height}
                onChange={(e) => {
                  setData({ ...data, height: e.target.value });
                }}
              />
            </div>
            <div className="w-1/2 md:w-1/2 px-3 border p-2">
              <label
                for="exampleInputEmail1"
                className="form-label w-1/2 text-sm font-bold text-gray-500 inline-block pl-2 mb-2"
              >
                Width*
              </label>
              <input
                className="appearance-none block w-1/2 rounded py-3 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="abc@gmail.com"
                value={data.width}
                onChange={(e) => {
                  setData({ ...data, width: e.target.value });
                }}
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 border p-2 md:mb-0">
              <label
                for="exampleInputEmail1"
                className="form-label text-lg bg-gray-200 hover:bg-gray-300 font-bold text-gray-500 inline-block pl-2 mb-2"
                onClick={() => setVisible(true)}
              >
                Select Date Range
              </label>
              {visible ? (
                <DateRangePicker
                  style={{ height: "300px", width: "280px" }}
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={["#68AC5D"]}
                  onChange={handleSelect}
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-32 bg-darkgreen ml-8 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full mx-auto"
          >
            Add Equipment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
