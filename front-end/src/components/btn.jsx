import React from "react";

export const Btn = ({ bgColor, width, type, title, handleClick }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, width: width }}
      className="lg:mb-0  my-10 p-3 rounded-lg w-full bg-primaryColor text-white font-bold"
      type={type}
      onClick={handleClick}
    >
      <h2>{title}</h2>
    </button>
  );
};
export default Btn;
