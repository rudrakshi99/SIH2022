import React, { useState } from "react";

//COmponents
import InputField from "../input/InputField";

//Redux State
import { useSelector } from "react-redux";

//Functions
import { postCancellationData } from "../../api/authAPI";

const CancellationForm = () => {
  const [booking_id, setBookingId] = useState("");
  const [cancel_reason, setCancelReason] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const tokenState = useSelector((state) => state.tokenReducer);

  async function submitCancellation(e) {
    e.preventDefault();
    const data = await postCancellationData({
      booking_id,
      cancel_reason,
      description,
      token: tokenState.accessToken,
    });
    console.log(data);
    if (data.success) {
      setMessage(data.message);
    }
  }

  return (
    <div>
      <div className="text-center">
        <div className="p-9" style={{ backgroundColor: "#68AC5D" }}>
          <h1 className="text-4xl font-bold text-white">
            Booking Cancellation Form
          </h1>
          <p className="text-2xl font-semibold text-white my-4">
            Please read all the terms and conditions before continuing.
          </p>
        </div>
        <div className="w-1/3 -translate-y-10 mx-auto">
          <form
            className="flex flex-col p-9 rounded-xl bg-white z-40"
            onSubmit={submitCancellation}
          >
            <h1 className="text-center text-xl mb-5">
              Submit this form for faster assistance.
            </h1>
            <InputField
              type="text"
              value={booking_id}
              onChange={(e) => setBookingId(e.target.value)}
              placeholder="Booking ID"
            />
            <InputField
              type="text"
              value={cancel_reason}
              onChange={(e) => setCancelReason(e.target.value)}
              placeholder="Cancel Reason"
            />
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your message ..."
              className="shadow-inner border-none w-100 rounded-2xl placeholder:font-semibold placeholder:text-gray-400 placeholder:text-md h-10 input-style mb-3 px-3 h-32 "
            />
            <p className="text-center">{message}</p>
            <button
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              type="submit"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CancellationForm;