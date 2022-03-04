import React from "react";

//CSS
import './InputField.css';

const InputField = ({placeholder, onChange, value, type, required}) => {
    return (
        <input 
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className='shadow-inner w-100 rounded-2xl placeholder:font-semibold placeholder:text-gray-400 placeholder:text-md h-10 input-style mb-3 px-3'
            type={type}    
            required = {required}
        />
    )
}

export default InputField;