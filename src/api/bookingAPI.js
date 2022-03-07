// import axios from "axios";
import instance from "./config";
import Cookies from "js-cookie";

const url = "https://krishi-sadhan-app.herokuapp.com";

export const getBooking = async ({ accessToken }) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const res = await instance.get(`${url}/api/booking/`, { headers });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};



export const createBooking = async (equipment, start_date, end_date, start_time, end_time) => {
  try {
      const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get('access-token')}`
      };
      return await instance.post('/api/booking/create/' , {
        equipment,
        start_date,
        end_date,
        start_time,
        end_time,
      }, {headers});
  } catch(error) {
      console.log('Error while calling createBooking API', error);
  }
}



// export const createBooking = async (
//   equipment,
//   start_date,
//   end_date,
//   start_time, end_time
// ) => {
//   try {
//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${Cookies.get('access-token')}`,
//     };
//     const res = await instance.post(
//       `${url}/api/booking/create`,
//       {
//           equipment,
//           start_date,
//           end_date,
//         start_time,
//         end_time,
//       },
//       { headers }
//     );
//     return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.reject(err.response?.data?.msg);
//   }
// };