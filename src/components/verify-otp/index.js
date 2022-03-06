import React, { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import InputField from "../input/InputField";

//Functions
import { verifyOtp } from "../../api/authAPI";

const VerifyOTP = () => {
  const [OTP, setOTP] = useState("");
  const [searchParams] = useSearchParams();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const phone_number = searchParams.get("phone_number");

  async function verify(e) {
    e.preventDefault();
    try {
      const data = await verifyOtp({ phone_number: phone_number, otp: OTP });
      if (data.success) {
        setSuccess(true);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setOTP("");
        setError(true);
      }
      console.log(data);
    } catch (err) {}
  }

  return (
    <div className="">
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
            {success && (
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
            <Link to="/" className="text-blue-600 underline">
              Resend
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
