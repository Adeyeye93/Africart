import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, img, description, link }) => {
  return (
    <div className="flex flex-col justify-between gap-y-[1rem] w-[280px] h-[380px] bg-gray-200 p-[10px] text-primaryColor rounded-[8px] py-[10px] service-card">
      <h3 className="text-[18px] text-center font-[600]">{title}</h3>
      <img src={img} alt="" className="w-[200px] mx-auto" />
      <p className="text-center text-[14px]">{description}</p>
      <Link to={link} className="underline underline-offset-2 text-center text-[14px]">
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
