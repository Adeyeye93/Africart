import React from "react";
import { Link } from "react-router-dom";

const ArtworkCard = ({ image, title, description, price }) => {
  return (
    <div className="rounded-[50px]">
      <img
        src={image}
        alt="artwork"
        className="w-full h-[200px] artwork-image"
      />
      <div className="flex flex-col justify-between mt-[10px] px-[5px] h-[100px]">
        <div className="flex flex-col h-[100px]">
          <div className="flex justify-between items-center mb-[3px]">
            <Link className="font-[600] text-[14px] underline">{title}</Link>
            <button>
              <img
                src="assets/images/heart.svg"
                alt="favourite"
                className="size-[20px]"
              />
            </button>
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <p className=" text-[13px]">{description}</p>
            <p className=" text-[13px]">{price}</p>
          </div>
        </div>

        <div className="flex mt-[5px] gap-x-[5px]">
          <img
            src="assets/images/stars.png"
            alt="stars"
            className="size-[10px]"
          />
          <img
            src="assets/images/stars.png"
            alt="stars"
            className="size-[10px]"
          />
          <img
            src="assets/images/stars.png"
            alt="stars"
            className="size-[10px]"
          />
          <img
            src="assets/images/stars.png"
            alt="stars"
            className="size-[10px]"
          />
          <img
            src="assets/images/stars.png"
            alt="stars"
            className="size-[10px]"
          />
        </div>
      </div>
      <button className="w-full mt-[10px] flex items-center justify-center text-[13px] gap-x-[10px] bg-primaryColor px-[10px] py-[5px] rounded text-white  hover:bg-[hsl(169,100%,10%)] hover:text-white">
        <img
          src="/assets/images/cart-white.svg"
          alt="cart"
          className="size-[20px]"
        />
        Add to Cart
      </button>
    </div>
  );
};

export default ArtworkCard;
