import React from "react";
import { Link } from "react-router-dom";

const ArtworkCard = ({ image, title, description, price }) => {
  return (
    <div className="rounded-[50px]">
      <img
        src="assets/images/artwork.png"
        alt="artwork"
        className="w-full h-[200px] artwork-image"
      />
      <div className="flex flex-col justify-between mt-[10px] px-[5px]">
        <div>
          <div className="flex justify-between items-center mb-[3px]">
            <Link className="font-[600] text-[14px] underline">
              Sheri Bakes
            </Link>
            <img
              src="assets/images/heart.svg"
              alt="favourite"
              className="size-[20px]"
            />
          </div>

          <p className=" text-[12px]">Sculpture of a Queen Mother Loybaz</p>
          <p className=" text-[14px]">$35.00</p>
        </div>

        <div className="flex mt-[5px] gap-x-[5px]">
          <img
            src="assets/images/stars.png"
            alt="stars"
            className="size-[10px]"
          />{" "}
          <img
            src="assets/images/stars.png"
            alt="stars"
            className="size-[10px]"
          />{" "}
          <img
            src="assets/images/stars.png"
            alt="stars"
            className="size-[10px]"
          />{" "}
          <img
            src="assets/images/stars.png"
            alt="stars"
            className="size-[10px]"
          />{" "}
          <img
            src="assets/images/stars.png"
            alt="stars"
            className="size-[10px]"
          />
        </div>
        <button className="mt-[10px] flex items-center justify-center text-[13px] gap-x-[10px] bg-primaryColor px-[10px] py-[5px] rounded text-white">
          <img
            src="/assets/images/cart-white.svg"
            alt="cart"
            className="size-[20px]"
          />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ArtworkCard;
