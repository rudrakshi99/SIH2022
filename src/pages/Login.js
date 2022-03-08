import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sticky from "react-sticky-el";
import Cookies from "js-cookie";

//Components
import InputField from "../components/input/InputField";
import Loader from "../components/loader/";

//Functions
import { SuccessMsg, ErrorMsg } from "../components/alerts";
import {
  postLoginDataEmail,
  postLoginDataPhone,
  verifyOtp,
} from "../api/authAPI";
import {
  getLoginAction,
  getSaveTokenAction,
  getSaveProfileAction,
} from "../redux/actions";

//Images
import login_img from "../img/login_img.jpg";
import logo from "../img/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [data, setData] = useState();
  const [OTP, setOTP] = useState("");
  const [success2, setSuccess2] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function Login(e) {
    //request to server
    e.preventDefault();
    setLoading(true);
    try {
      const data2 = await postLoginDataEmail({ email, password });
      if (!data2.success) {
        setLoading(false);
        setSuccess(true);
        setMessage(data2.message);
      }
      saveData(data2);
      return;
    } catch (err) {
      setSuccess(false);
      setLoading(false);
      setMessage("Server Issue, Try again later");
      console.log(err);
    }
  }

  async function handleLoginPhone() {
    //request to server
    // e.preventDefault();
    setShowOTP(true);
    try {
      const data = await postLoginDataPhone({ phone_number: phone_number });
      if (data.success) {
        setData(data);
        setShowOTP(true);
      }
    } catch (err) {
      setSuccess(false);
      setLoading(false);
      setMessage("Server Issue, Try again later");
      console.log(err);
    }
  }

  async function verify(e) {
    e.preventDefault();
    try {
      const data2 = await verifyOtp({ phone_number: phone_number, otp: OTP });
      if (data2.success) {
        saveData(data);
        setSuccess2(true);
        setLoading(false);
        navigate("/");
      } else {
        setOTP("");
        setError(true);
      }
      console.log(data);
    } catch (err) {}
  }
  async function saveData(data) {
    setSuccess(data.success);
    setMessage(data.message);
    localStorage.setItem("isLoggedIn", true);
    Cookies.set("access-token", data.data.tokens.access, {
      path: "/",
      expires: new Date().setDate(new Date().getDate() + 1),
    });
    Cookies.set("refresh-token", data.data.tokens.refresh, {
      path: "/",
      expires: new Date().setDate(new Date().getDate() + 1),
    });
    console.log(data);
    Cookies.set("uuid", data.data.uuid, {
      path: "/",
      expires: new Date().setDate(new Date().getDate() + 1),
    });
    Cookies.set("user", data);
    console.log(Cookies.get("user"));
    dispatch(getLoginAction());
    dispatch(
      getSaveTokenAction({
        accessToken: data.data.tokens.access,
        refreshToken: data.data.tokens.refresh,
      })
    );
    dispatch(getSaveProfileAction(data));
    setLoading(false);
    navigate("/");
  }

  return (
    <div>
      {loading && <Loader />}
      <Sticky>
        {showOTP && (
          <div className="absolute my-20 z-40">
            <div className="bg-gray-300 h-screen w-screen flex justify-center align-center p-9">
              <div className=" rounded-xl bg-white w-1/4 h-auto p-9 ">
                <form onSubmit={verify} className="flex flex-col ">
                  <h1 className="mb-5 text-center text-xl">
                    Enter the OTP sent to your Registered Number
                  </h1>
                  <InputField
                    placeholder="OTP"
                    value={OTP}
                    onChange={(e) => setOTP(e.target.value)}
                    type="text"
                    required={true}
                  />
                  <button
                    className="px-6 py-1 mx-auto rounded-lg text-white text-lg font-semibold"
                    style={{ backgroundColor: "#68AC5D" }}
                    type="submit"
                  >
                    Verify OTP
                  </button>
                  {success2 && (
                    <p className="text-center text-green-400">
                      OTP verified successfully!
                    </p>
                  )}
                  {error && (
                    <p className="text-center text-red-400">
                      Wrong OTP, plase try again!
                    </p>
                  )}
                </form>
                <p className="my-5 text-center">
                  Didn't recieve OTP?{" "}
                  <p className="text-blue-600 underline">Resend</p>
                </p>
              </div>
            </div>
          </div>
        )}
      </Sticky>
      <div className={`${loading && "blur-sm"} flex flex-col`}>
        <div className="flex justify-center py-9 rounded-2xl">
          <div>
            <img className="" src={login_img} alt="signup" />
          </div>
          <div
            className="px-9"
            style={{
              backgroundColor: "rgba(157, 157, 157, 0.2)",
              paddingTop: "5rem",
            }}
          >
            <form
              onSubmit={Login}
              className="bg-white relative p-9 pt-3 drop-shadow-md rounded-3xl flex flex-col justify-center text-center w-96"
            >
              <div className="absolute -top-12 float-center flex flex-col left-1/2 -translate-x-1/2">
                <img
                  className="h-24 w-24 border-full mx-auto"
                  style={{
                    filter: "drop-shadow(0px 4px 4px rgba(104, 172, 93, 0.25))",
                  }}
                  src={logo}
                  alt="logo"
                />
              </div>
              <h1 className="text-2xl font-bold" style={{ marginTop: "3rem" }}>
                Login Here
              </h1>
              {success && <SuccessMsg msg={message} />}
              {error && <ErrorMsg msg={message} />}
              <p className="font mb-4">Login Using Email</p>
              <InputField
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
              />
              <InputField
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <button
                className="px-6 py-1 w-32 mx-auto rounded-lg text-white text-xl font-semibold"
                style={{ backgroundColor: "#68AC5D" }}
                type="submit"
              >
                Login
              </button>
              <div
                className="flex flex-col my-7 relative"
                style={{ borderTop: "1px solid #4F4F4F" }}
              >
                <h1
                  className="rounded-full bg-white w-10 text-center p-2 absolute left-1/2 -top-6 -translate-x-1/2"
                  style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
                >
                  OR
                </h1>
              </div>
              <p className="mb-3">Login Using Mobile No.</p>
              <InputField
                placeholder="Mobile No."
                value={phone_number}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  console.log(phone_number);
                  if (phone_number.length === 10) {
                    handleLoginPhone();
                  }
                }}
                type="text"
              />
              <p className="my-3">
                An OTP will be sent to your mobile number for verification.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
