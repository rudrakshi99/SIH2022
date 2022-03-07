import Cookies from "js-cookie";
import axios from "axios";
import { renewAccessToken } from "./authAPI";
const instance = axios.create({
  baseURL: "https://krishi-sadhan-app.herokuapp.com",
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      // will loop if refreshToken returns 401
      const token = await renewAccessToken();
      Cookies.set("access-token", token.access);
      error.config.headers["Authorization"] = "Bearer " + token.access;
      error.config.baseURL = undefined;
      return axios.request(error.config);
    }
  }
);

export default instance;
