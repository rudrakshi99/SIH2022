import React, { useState } from "react";

//Components
import InputField from "../components/input/InputField";

//Functions
import { postDisputeData } from "../api/authAPI";

const PartnerDispute = () => {
  const [partner_id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setFullName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [equipment_id, setEquipmentId] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  async function submitDispute(e) {
    e.preventDefault();
    const data = await postDisputeData({
      partner_id,
      email,
      name,
      phone_number,
      description,
      topic,
      equipment_id,
    });
    if (data.success) {
      setMessage(data.message);
    }
  }

  return (
    <div>
      <div className="text-center">
        <div className="p-9" style={{ backgroundColor: "#68AC5D" }}>
          <h1 className="text-4xl font-bold text-white">
            Partner Dispute : Resolution Center
          </h1>
          <p className="text-2xl font-semibold text-white my-4">
            Submit a complaint, and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="w-1/3 -translate-y-10 mx-auto">
          <form
            className="flex flex-col p-9 rounded-xl bg-white z-40"
            onSubmit={submitDispute}
          >
            <h1 className="text-center text-xl mb-5">
              Submit this form for faster assistance.
            </h1>
            <InputField
              type="text"
              value={partner_id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Partner ID"
            />
            <InputField
              type="text"
              value={equipment_id}
              onChange={(e) => setEquipmentId(e.target.value)}
              placeholder="Equipment ID"
            />
            <InputField
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <InputField
              type="text"
              value={name}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
            />
            <InputField
              type="text"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
            />
            <select
              id="topic"
              name="topic"
              autoComplete="topic-name"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option disabled>Topic</option>
              <option value={10}>Financial related</option>
              <option value={20}>Commercial and product related</option>
              <option value={30}>Breach of contract related</option>
            </select>
            -
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your message ..."
              className="shadow-inner border-none w-100 rounded-2xl placeholder:font-semibold placeholder:text-gray-400 placeholder:text-md h-10 input-style mb-3 px-3 h-32 "
            />
            <p className="text-center">{message}</p>
            <button
              className="px-6 py-1 w-64 mx-auto rounded-lg text-white text-xl font-semibold"
              style={{ backgroundColor: "#68AC5D" }}
              type="submit"
            >
              Submit Dispute
            </button>
            <p className="text-center text-green-300">{message}</p>
          </form>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default PartnerDispute;
