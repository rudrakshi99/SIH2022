import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { format } from "date-fns";

//Functions
import { getBooking, getBookingOwner } from "../../api/bookingAPI";
import { useNavigate } from "react-router-dom";

const BookingHistory = () => {
  const [tab, setTab] = useState(false);
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [items, setItems] = useState(Data);
  const [all, setAll] = useState(true);
  useEffect(() => {
    if(!Cookies.get('access-token')) {
        navigate('/');
    }
  }, []);
  const [filter_data, setFilterData] = useState({
    per_day_price: 2000,
    per_hour_price: 2000,
    price_per_km: 2000,
    date: new Date().toISOString().slice(0, 10),
    status: "none",
    brand: "none",
  });
  const filter_by_status = [
    "Pending",
    "Accepted",
    "Rejected",
    "In Progress",
    "Completed",
    "Cancelled",
  ];
  const filter_by_brands = ["Mahindra", "John Deer", "CLAAS"];

  async function Booking() {
    console.log();
    // const data = await getBooking({
    //   accessToken: Cookies.get("access-token"),
    // });
    const { data } = await getBooking();
    console.log(data, "getBooking");
    setData(data);
  }

  useEffect(() => {
    Booking();
  }, []);

  const filter = ({ type }) => {
    if (all) {
      setItems(Data);
    } else {
      switch (type) {
        case "status": {
          const data = Data.filter(
            (item) => item.status === filter_data.status
          );
          setItems(data);
          return;
        }
        case "brands": {
          const data = Data.filter(
            (item) => item.equipment.manufacturer === filter_data.brand
          );
          console.log(data);
          setItems(data);
          return;
        }
        case "date": {
          const data = Data.filter(
            (item) => item.created_at.slice(0, 10) === filter_data.date
          );
          setItems(data);
          return;
        }
        default:
          return;
      }
    }
  };
  // const formattedStartDate = format(new Date(startDate), "yyyy-MM-dd");
  async function BookingOwner() {
    console.log();
    // const data = await getBooking({
    //   accessToken: Cookies.get("access-token"),
    // });
    const { data } = await getBookingOwner();
    console.log(data, "getBooking");
    setData(data);
  }

  return (
    <div>
      <div className="p-3 pt-0">
        <div className="flex mb-7">
          <button
            className={`w-1/2 py-4 ${
              !tab && "text-[#68AC5D] border-b-[#68AC5D] border-b-2"
            } hover:bg-gray-200 text-xl font-bold`}
            onClick={() => {
              setTab(false);
              Booking();
            }}
          >
            Customer
          </button>
          <button
            className={`w-1/2 py-4 ${
              tab && "text-[#68AC5D] border-b-[#68AC5D] border-b-2"
            } hover:bg-gray-200 text-xl font-bold`}
            onClick={() => {
              setTab(true);
              BookingOwner();
            }}
          >
            Owner
          </button>
        </div>
        <div className="flex max-w-7xl mx-auto">
          <div
            className="flex w-1/4 flex-col rounded-b-3xl"
            style={{ boxShadow: "0px 15px 15px rgba(104, 172, 93, 0.5)" }}
          >
            <div className="bg-[#68AC5D] p-6 rounded-t-3xl">
              <h1 className="text-white font-semibold text-xl text-center">
                Booking Filters
              </h1>
            </div>
            <div className="border-x-2 p-4">
              <div className="flex flex-col">
                <h1 className="font-bold text-lg text-[#4F4F4F] underline mb-3 decoration-[#68AC5D]">
                  Status
                </h1>
                {filter_by_status.map((item, i) => {
                  return (
                    <button
                      className="text-left mb-1"
                      key={i}
                      onClick={() => {
                        setAll(true);
                        setAll(false);
                        setFilterData({ ...filter_data, status: item });
                        filter({ type: "status" });
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
                <h1 className="font-bold text-lg text-[#4F4F4F] underline mb-3 mt-6 decoration-[#68AC5D]">
                  Brands
                </h1>
                {filter_by_brands.map((item, i) => {
                  return (
                    <button
                      className="text-left mb-1"
                      key={i}
                      onClick={() => {
                        setAll(true);
                        setAll(false);
                        setFilterData({ ...filter_data, brand: item });
                        filter({ type: "brands" });
                      }}
                    >
                      {item}
                    </button>
                  );
                })}
                <h1 className="font-bold text-lg text-[#4F4F4F] underline mb-3 mt-6 decoration-[#68AC5D]">
                  Price Range
                </h1>
                <div>
                  <label
                    htmlFor="customRange1"
                    className="form-label font-semibold"
                  >
                    Per Day Price
                  </label>
                  <input
                    type="range"
                    id="perDay"
                    className="rangeInput form-range text-green-100 appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                    max={149000}
                    value={filter_data.per_day_price}
                    onChange={(e) =>
                      setFilterData({
                        ...filter_data,
                        per_day_price: e.target.value,
                      })
                    }
                  />
                  {/* <input
                    type="range"
                    id="customRange1"
                    className="form-range w-full h-6 p-0 bg-tdansparent focus:outline-none focus:ring-0 focus:shadow-none"
                    min={0}
                    max={149000}
                    value={filter_data.per_day_price}
                    onChange={(e) =>
                      setFilterData({
                        ...filter_data,
                        per_day_price: e.target.value,
                      })
                    }
                  /> */}
                  <p>Rs 0 to {filter_data.per_day_price}</p>
                </div>
                <div>
                  <label
                    htmlFor="customRange1"
                    className="form-label font-semibold"
                  >
                    Per Hour Price
                  </label>
                  <input
                    type="range"
                    id="perDay"
                    className="rangeInput form-range text-green-100 appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                    min={0}
                    max={49827}
                    value={filter_data.per_hour_price}
                    onChange={(e) =>
                      setFilterData({
                        ...filter_data,
                        per_hour_price: e.target.value,
                      })
                    }
                  />
                  {/* <input
                    type="range"
                    id="customRange1"
                    className="form-range w-full h-6 p-0 bg-tdansparent focus:outline-none focus:ring-0 focus:shadow-none"
                    min={0}
                    max={49827}
                    value={filter_data.per_hour_price}
                    onChange={(e) =>
                      setFilterData({
                        ...filter_data,
                        per_hour_price: e.target.value,
                      })
                    }
                  /> */}
                  <p>Rs 49 to {filter_data.per_hour_price}</p>
                </div>
                <div>
                  <label
                    htmlFor="customRange1"
                    className="form-label font-semibold"
                  >
                    Distance from You
                  </label>
                  <input
                    type="range"
                    id="perDay"
                    className="rangeInput form-range text-green-100 appearance-none w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                    min={0}
                    max={149000}
                    value={filter_data.price_per_km}
                    onChange={(e) =>
                      setFilterData({
                        ...filter_data,
                        price_per_km: e.target.value,
                      })
                    }
                  />
                  {/* <input
                    type="range"
                    id="customRange1"
                    className="form-range w-full h-6 p-0 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                    min={0}
                    max={149000}
                    value={filter_data.price_per_km}
                    onChange={(e) =>
                      setFilterData({
                        ...filter_data,
                        price_per_km: e.target.value,
                      })
                    }
                  /> */}
                  <p>Rs 0 to {filter_data.price_per_km}</p>
                </div>
                <h1 className="font-bold text-lg text-[#4F4F4F] underline mb-3 mt-6">
                  Booking Date
                </h1>
                <div className="datepicker relative form-floating mb-3">
                  <input
                    type="date"
                    className="form-contdol block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded tdansition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                    value={filter_data.date}
                    onChange={(e) => {
                      setAll(true);
                      setAll(false);
                      setFilterData({ ...filter_data, date: e.target.value });
                      filter({ type: "date" });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 p-5 rounded-2xl border border-[#4F4F4F] m-2">
            {items !== [] ? (
              <div>
                <h1 className="text-xl font-semibold text-[#4F4F4F]">
                  Booking History
                </h1>
                <div>
                  <table className="w-full mt-4">
                    <thead className="border-b bg-gray-200">
                      <tr>
                        <th className="py-4">Date</th>
                        <th className="py-4">Booking ID</th>
                        <th className="py-4">Equipment Name</th>
                        <th className="py-4">Manufacturer</th>
                        <th className="py-4">Request Status</th>
                        <th className="py-4">All Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Data?.map((item, i) => {
                        return (
                          <tr
                            key={i}
                            className="bg-white border-b text-center hover:bg-gray-100"
                          >
                            <td className="py-1 text-lg">
                              {format(new Date(item.created_at), "yyyy-MM-dd")}
                            </td>
                            <td className="py-1 text-lg">{item.booking_id}</td>
                            <td className="py-1 text-lg">
                              {item.equipment.title}
                            </td>
                            <td className="py-1 text-lg">
                              {item.equipment.manufacturer}
                            </td>
                            <td className="py-1 text-lg">{item.status}</td>
                            <td className="py-1 text-lg">
                              <button
                                onClick={() =>
                                  navigate(`/bookingRequest/${item.id}`)
                                }
                                className="text-blue-400 cursor-pointer"
                              >
                                All Details
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="h-full">
                <h1 className="text-4xl font-bold text-[#4f4f4f] relative left-1/3 top-1/2">
                  Nothing to show here... :(
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
