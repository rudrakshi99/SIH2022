import axios from "axios";
import Cookies from "js-cookie";

// const url = "http://localhost:5000";
const url = "https://krishi-sadhan-app.herokuapp.com";

export const postRegisterData = async ({
  first_name,
  email,
  password,
  last_name,
  pin_code,
  phone_number,
}) => {
  try {
    const res = await axios.post(`${url}/users/signup/`, {
      first_name,
      last_name,
      email,
      password,
      pin_code,
      phone_number,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const postLoginDataEmail = async ({ email, password }) => {
  try {
    const res = await axios.post(`${url}/users/login/email`, {
      email,
      password,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const postLoginDataPhone = async ({ phone_number }) => {
  try {
    const res = await axios.post(`${url}/users/login/otp`, {
      phone_number,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const verifyOtp = async ({ phone_number, OTP }) => {
  try {
    const res = await axios.post(`${url}/users/signup/verify-otp`, {
      phone_number,
      OTP,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const verifyOtpLogin = async ({ phone_number, OTP }) => {
  try {
    const res = await axios.post(`${url}/users/login/verify-otp`, {
      phone_number,
      OTP,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const renewAccessToken = async () => {
  axios.interceptors.response.use(undefined, function axiosRetryInspector(err) {
    const refresh_token = Cookies.get("refresh-token");
    if (err.response.status === 401 && refresh_token) {
      axios
        .post(`${url}/api/token/refresh/`, { refresh: refresh_token })
        .then((res) => res.data)
        .then((res) => {
          err.config.headers["Authorization"] = "Bearer " + res.token;
          Cookies.set("access-token", res.data.token, { path: "/" });
          err.config.__isRetryRequest = true;
          return axios(err.config);
        });
    }
  });
  try {
    const res = await axios.post(`${url}/api/token/refresh`, null);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const logoutUser = async () => {
  try {
    const res = await axios.get(`${url}/api/auth/logout`);
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const forgotPassword = async (email) => {
  try {
    const res = await axios.post(`${url}/api/auth/forgot-password`, { email });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const resetPassword = async (password, accessToken) => {
  try {
    const res = await axios.post(
      `${url}/api/auth/reset-password`,
      { password },
      {
        headers: { Authorization: accessToken },
      }
    );
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const getProfile = async (accessToken) => {
  try {
    const res = await axios.get(`${url}/api/profile`, {
      headers: { Authorization: accessToken },
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const updateProfile = async (name, accessToken) => {
  try {
    const res = await axios.put(
      `${url}/api/profile`,
      { name },
      {
        headers: { Authorization: accessToken },
      }
    );
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const updatePassword = async (password, accessToken) => {
  try {
    const res = await axios.post(
      `${url}/api/auth/reset-password`,
      { password },
      {
        headers: { Authorization: accessToken },
      }
    );
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const postDisputeData = async ({
  partner_id,
  email,
  name,
  phone_number,
  description,
  topic,
  equipment_id,
}) => {
  try {
    const res = await axios.post(`${url}/enquiry/partner-dispute`, {
      partner_id,
      email,
      name,
      phone_number,
      description,
      topic,
      equipment_id,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};

export const postCancellationData = async ({
  booking_id,
  cancel_reason,
  description,
  token,
}) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    };
    const res = await axios.post(
      `${url}/enquiry/cancel-form`,
      {
        booking_id,
        cancel_reason,
        description,
      },
      { headers }
    );
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err.response?.data?.msg);
  }
};