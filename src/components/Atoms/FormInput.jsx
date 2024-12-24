import React, { useState } from "react";
import { twMerge, twJoin } from "tailwind-merge";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, id, errorMessage, className, onChange, ...inputData } = props;

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className={twMerge(className)}>
      <label className="block text-sm  md:text-base" htmlFor={label}>
        {label}
      </label>
      <input
        className={`input-field w-full h-12 text-sm md:text-base rounded-md my-2 px-5 
        focus:outline-none focus:ring-1 focus:ring-indigo-400 shadow-2xl `}
        id={label}
        onChange={onChange}
        {...inputData}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="span-field text-red-600 text-xs p-1">
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
