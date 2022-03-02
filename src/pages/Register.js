import React, { useState } from "react";

//Components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PreHeader from "../components/preheader/PreHeader";
import InputField from "../components/input/InputField";

//Images
import signup_img from "../img/signup_img.jpg";
import logo from "../img/logo.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  async function Register() {
    //request to server
  }

  return (
    <div className="flex flex-col">
      <PreHeader />
      <Header />
      <div className="flex justify-center py-9">
        <div>
          <img className="" src={signup_img} alt="signup" />
        </div>
        <div
          className="px-9"
          style={{ backgroundColor: "#9D9D9D", paddingTop: "5rem" }}
        >
          <form
            onSubmit={Register}
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
              Register Here
            </h1>
            <p className="font-semibold mb-4">Enter your details</p>
            <InputField
              placeholder="First Name*"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
            />
            <InputField
              placeholder="Last Name*"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
            />
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
            <InputField
              placeholder="Pincode*"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              type="text"
            />
            <InputField
              placeholder="Phone Number*"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
            />
            <button
              onClick="submit"
              className="px-6 py-1 w-32 mx-auto rounded-lg text-white text-xl font-semibold"
              style={{ backgroundColor: "#68AC5D" }}
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
