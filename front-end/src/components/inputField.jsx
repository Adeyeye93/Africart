import React from "react";

export const InputField = ({ bgColor, type, placeholder }) => {
  return (
    <>
      <input
        style={{ backgroundColor: bgColor }}
        className="my-2 p-3 rounded-lg w-full"
        type={type}
        placeholder={placeholder}
        required
      />
    </>
  );
};
export default InputField;
