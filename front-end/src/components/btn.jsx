import React from "react";

export const Btn = ({ type, placeholder, title }) => {
  return (
    <>
      <input
        className=" p-3 rounded-lg w-full"
        type={type}
        placeholder={placeholder}
        required
      />
    </>
  );
};
export default Btn;
