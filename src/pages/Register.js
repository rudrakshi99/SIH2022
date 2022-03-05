import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";

//Components
import InputField from "../components/input/InputField";
import { ErrorMsg } from "../components/alerts";

//Functions
import { postRegisterData } from "../api/authAPI";
import { isEmail, isEmpty, isValidPassword } from "../utils/validation";
import { getSaveProfileAction } from "../redux/actions";

//Images
import signup_img from "../img/signup_img.jpg";
import logo from "../img/logo.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [pin_code, setPincode] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  async function Register(e) {
    //request to server
    e.preventDefault();
    if (
      isEmpty(first_name) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(pin_code) ||
      isEmpty(phone_number) ||
      isEmpty(last_name)
    ) {
      return <ErrorMsg msg="Please Fill in all the details" />;
    }

    if (!isEmail(email)) {
      return <ErrorMsg msg="Enter a valid Email" />;
    }

    if (!isValidPassword(password)) {
      return <ErrorMsg msg="Password must be atleast 4 characters long" />;
    }

    try {
      setLoading(true);
      const data = await postRegisterData({
        first_name,
        email,
        password,
        last_name,
        pin_code,
        phone_number,
      });
      console.log(data);
      // useDispatch(getSaveProfileAction(data.data));
      setSuccess(data.success);
      setMessage(data.message);
      setLoading(false);
      navigate({
        pathname: "../verify-otp",
        search: `?${createSearchParams({
          phone_number: phone_number,
        })}`,
      });
    } catch (error) {
      error && setMessage("Server Issue, Try again later");
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col">
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
              required={true}
            />
            <InputField
              placeholder="Last Name*"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              required={true}
            />
            <InputField
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required={false}
            />
            <InputField
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required={true}
            />
            <InputField
              placeholder="Pincode*"
              value={pin_code}
              onChange={(e) => setPincode(e.target.value)}
              type="text"
              required={true}
            />
            <InputField
              placeholder="Phone Number*"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              required={true}
            />
            <button
              className="px-6 py-1 w-32 mx-auto rounded-lg text-white text-xl font-semibold"
              style={{ backgroundColor: "#68AC5D" }}
              type="submit"
            >
              Register
            </button>
            {success && (
              <p className="text-center text-green-400">
                Registered successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
