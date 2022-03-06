import Cookies from "js-cookie";
import dayjs from "dayjs";
import jwtdecode from "jwt-decode";
import axios from "axios";
import { renewAccessToken } from "./authAPI";
const instance = axios.create({
  baseURL: "https://krishi-sadhan-app.herokuapp.com",
  // baseURL: 'http://localhost:5000/',
});
export default instance;

axios.interceptors.request.use(
  (req) =>
    async function () {
      const token = Cookies.get("access-token");
      const isExpired = dayjs.unix(jwtdecode(token).exp).diff(dayjs()) < 1;
      if (isExpired) {
        const data = await renewAccessToken();
        Cookies.set("access-token", data.access);
      }
      req.headers.Authorization = `Bearer ${token}`;
      return req;
    }
);

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const status = error.response ? error.response.status : null;

//     if (status === 401) {
//       will loop if refreshToken returns 401
//       return refreshToken(store).then((_) => {
//         error.config.headers["Authorization"] = "Bearer " + store.state.token;
//         error.config.baseURL = undefined;
//         return axios.request(error.config);
//       });
//     }
//   }
// );
