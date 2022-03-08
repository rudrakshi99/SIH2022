import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

//Functions
import { createEquipmentReport } from "../api/equipments";

const EquipmentReport = () => {
  const [equipment, setEquipment] = useState(1);
  const [report_reason, setReportReason] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const params = useParams();

  useEffect(() => {
    setEquipment(params.id);
  }, []);

  async function submitEquipmentReport(e) {
    e.preventDefault();
    const data = await createEquipmentReport({
      equipment,
      report_reason,
      description,
    });
    console.log(data);
    if (data.data.success) {
      setSuccess(data.data.success);
      setMessage(data.data.message);
    }
  }
  return (
    <div>
      <div className="text-center">
        <div className="p-9" style={{ backgroundColor: "#68AC5D" }}>
          <h1 className="text-4xl font-bold text-white">
            Equipment Report Form
          </h1>
          <p className="text-2xl font-semibold text-white my-4">
            Report equipment
          </p>
        </div>
        <div className="w-1/3 -translate-y-10 mx-auto">
          <form
            className="flex flex-col p-9 rounded-xl bg-white z-40"
            onSubmit={submitEquipmentReport}
          >
            <h1 className="text-center text-xl mb-5">
              Submit this form for faster assistance.
            </h1>
            <div className="text-left my-3">
              <label className="text-lg font-semibold">Equipment ID : </label>
              <input
                type="text"
                value={equipment}
                placeholder="Equipment ID"
                required={true}
                disabled
                className="text-lg"
              />
            </div>

            <select
              id="topic"
              name="topic"
              autoComplete="topic-name"
              value={report_reason}
              required
              onChange={(e) => setReportReason(e.target.value)}
              className="mt-1 block mb-4 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value={0}>Select Suitable option</option>
              <option value={20}>Belongs to another person</option>
              <option value={30}>Is misleading in any way</option>
              <option value={40}>
                Harasses or advocates harassment of another person
              </option>
              <option value={10}>Others</option>
            </select>
            <textarea
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your message ..."
              className="shadow-inner border-none w-100 rounded-2xl placeholder:font-semibold placeholder:text-gray-400 placeholder:text-md h-10 input-style mb-3 p-3 h-32 "
            />
            <p
              className={`text-center my-4 ${
                success ? "text-green-500" : "text-red-400"
              }`}
            >
              {message}
            </p>
            <button
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              type="submit"
              disabled={success}
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EquipmentReport;
