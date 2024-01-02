import React from "react";

export const Btn = ({ bgColor, type, title }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className="lg:mb-0  my-10 p-3 rounded-lg w-full bg-primaryColor text-white font-bold"
      type={type}
    >
      <h2>{title}</h2>
    </button>
  );
};
export default Btn;
