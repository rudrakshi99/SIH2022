import axios from "./config";
import instance from "./config";
import Cookies from "js-cookie";

export const getEquips = async () => {
  try {
    return await axios.get("/api/equipment");
  } catch (error) {
    console.log("Error while calling getEquips API", error);
  }
};

export const getBrands = async () => {
  try {
    return await axios.get("/api/brand/");
  } catch (error) {
    console.log("Error while calling getEquips API", error);
  }
};
// /api/brand/

export const getEquip = async (id) => {
  try {
    return await axios.get(`/api/equipment/${id}`);
  } catch (error) {
    console.log("Error while calling getEquip API", error);
  }
};

export const getEquipsList = async () => {
  try {
    return await axios.get("/api/equipment_type");
  } catch (error) {
    console.log("Error while calling getEquipsList API", error);
  }
};

export const createEquipmentReport = async ({
  equipment,
  report_reason,
  description,
}) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access-token")}`,
    };
    return await instance.post(
      "/enquiry/report-equipment",
      {
        equipment,
        report_reason,
        description,
      },
      { headers }
    );
  } catch (error) {
    console.log("Error while calling createBooking API", error);
  }
};

export const createEquipment = async ({
  owner,
  manufacturer,
  title,
  description,
  equipment_type,
  available_start_time,
  available_end_time,
  equipment_location,
  daily_rental,
  hourly_rental,
  manufacturing_year,
  model,
  condition,
  horsepower,
  width,
  height,
}) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access-token")}`,
    };
    return await instance.post(
      "/api/equipment/create/",
      {
        owner,
        manufacturer,
        title,
        description,
        equipment_type,
        available_start_time,
        available_end_time,
        equipment_location,
        daily_rental,
        hourly_rental,
        manufacturing_year,
        model,
        condition,
        horsepower,
        width,
        height,
      },
      { headers }
    );
  } catch (error) {
    console.log("Error while calling createBooking API", error);
  }
};

// Booking api

// export const getBookings = async () => {
//     try {
//         const headers = {
//             "Content-Type": "application/json",
//             Authorization: `"Bearer ${Cookies.get('access-token')}`
//         };
//         return await axios.get('/api/booking' , { headers });
//     } catch(error) {
//         console.log('Error while calling getBookings API', error);
//     }
// }

// export const getBookingDetail = async (id) => {
//     try {
//         const headers = {
//             "Content-Type": "application/json",
//             Authorization: `"Bearer ${Cookies.get('access-token')}`
//         };
//         return await axios.get(`/api/booking/detail/${id}` , { headers });
//     } catch(error) {
//         console.log('Error while calling getBookingDetail API', error);
//     }
// }

// export const updateBooking = async (data, id) => {
//     try {
//         const headers = {
//             "Content-Type": "application/json",
//             Authorization: `"Bearer ${Cookies.get('access-token')}`
//         };
//         return await axios.get(`/api/booking/update/${id}` , { data }, { headers });
//     } catch(error) {
//         console.log('Error while calling getBookingDetail API', error);
//     }
// }

//  Feedback
export const submitFeedback = async ({ name, phone_number, description }) => {
  try {
    return await axios.post("/enquiry/feedback", {
      name,
      phone_number,
      description,
    });
  } catch (error) {
    console.log("Error while calling submitFeedback API", error);
  }
};
