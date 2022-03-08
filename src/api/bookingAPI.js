// import axios from "axios";
import instance from "./config";
import Cookies from "js-cookie";
import axios from "axios";

const url = "https://krishi-sadhan-app.herokuapp.com";

export const getBooking = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access-token")}`,
    };
    return await instance.get("/api/booking/", { headers });
  } catch (error) {
    console.log("Error while calling getBookings API", error);
  }
};

export const getBookingOwner = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access-token")}`,
    };
    return await instance.get("/api/booking/request/", { headers });
  } catch (error) {
    console.log("Error while calling getBookings API", error);
  }
};

export const createBooking = async (
  equipment,
  start_date,
  end_date,
  start_time,
  end_time
) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("access-token")}`,
    };
    return await instance.post(
      "/api/booking/create/",
      {
        equipment,
        start_date,
        end_date,
        start_time,
        end_time,
      },
      { headers }
    );
  } catch (error) {
    console.log("Error while calling createBooking API", error);
  }
};

export const getBookingDetail = async (id) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get('access-token')}`
        };
        return await instance.get(`/api/booking/detail/${id}/` , { headers });
    } catch(error) {
        console.log('Error while calling getBookingDetail API', error);
    }
}


export const BookingListRequest = async () => {
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get('access-token')}`
        };
        return await instance.get('/api/booking/request/' , { headers });
    } catch(error) {
        console.log('Error while calling getBookingDetail API', error);
    }
};

export const BookingUpdate = async (status, id) => {
  try {
      const headers = {
          "Content-Type": "application/json",
          Authorization: `"Bearer ${Cookies.get('access-token')}`
      };
      return await axios.patch(`https://krishi-sadhan-app.herokuapp.com/api/booking/update/${id}/` , { status }, { headers });
  } catch(error) {
      console.log('Error while calling getBookingDetail API', error);
  }
};
