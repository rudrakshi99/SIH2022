import React, { useState } from "react";

//Components
import InputField from "../components/input/InputField";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PreHeader from "../components/preheader/PreHeader";

//Images
import login_img from "../img/login_img.jpg";
import logo from "../img/logo.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  async function Login() {
    //request to server
  }

  return (
    <div className="flex flex-col">
      <PreHeader />
      <Header />
      <div className="flex justify-center py-9">
        <div>
          <img className="" src={login_img} alt="signup" />
        </div>
        <div
          className="px-9"
          style={{
            backgroundColor: "rgba(157, 157, 157, 0.2);",
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
              onClick="submit"
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
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
            />
            <p className="my-3">
              An OTP will be sent to your mobile number for verification.
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
