import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, img, description, link }) => {
  return (
    <div className="flex flex-col justify-between gap-y-[1rem] w-[250px] h-[370px] bg-secondaryColor p-[10px] text-primaryColor rounded-[15px] shadow-lg">
      <h3 className="text-[18px] font-[500] text-primaryColor text-center">
        {title}
      </h3>
      <img src={img} alt="" className="w-[250px] h-[150px] mx-auto" />
      <p className="text-[12px] text-center">{description}</p>
      <Link to={link} className="text-[12px] underline text-center">
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
