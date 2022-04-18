import React from "react";

//CSS
import "./InputField.css";

const InputField = ({ placeholder, onChange, value, type, required }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className=" w-3/4 mx-auto rounded-lg  placeholder:text-gray-400 placeholder:text-lg h-10 input-style mb-5 px-6 py-4"
      type={type}
      required={required}
    />
  );
};

export default InputField;
