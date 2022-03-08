import React, { useState } from "react";

//COmponents
import InputField from "../input/InputField";

//Functions
import { postCancellationData } from "../../api/authAPI";

const CancellationForm = () => {
  const [booking_id, setBookingId] = useState("");
  const [cancel_reason, setCancelReason] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  async function submitCancellation(e) {
    e.preventDefault();
    const data = await postCancellationData({
      booking_id,
      cancel_reason,
      description,
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
        <div className="w-3/4 -translate-y-10 mx-auto">
          <form
            className="flex flex-col p-9 max-w-7xl rounded-xl bg-white z-40"
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
            <select
              id="topic"
              name="topic"
              autoComplete="topic-name"
              value={cancel_reason}
              onChange={(e) => setCancelReason(e.target.value)}
              className="mt-1 block mb-4 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value={0}>Select Suitable option</option>
              <option value={20}>Quality Related</option>
              <option value={30}>Found a better deal</option>
              <option value={40}>Owner Related</option>
              <option value={10}>Others</option>
            </select>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your message ..."
              className="shadow-inner border-none w-100 rounded-2xl placeholder:font-semibold placeholder:text-gray-400 placeholder:text-md h-10 input-style mb-3 p-3 h-32 "
            />
            <p className="text-center">{message}</p>
            <button
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              type="submit"
            >
              Confirm
            </button>
            <p>{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CancellationForm;
