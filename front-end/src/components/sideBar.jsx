import React from "react";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const SideBar = forwardRef(function MyInput(props, ref) {
  const { status } = props;
  return (
    <div
      className={`fixed bg-white p-[1rem] top-0 ${
        status ? "left-[0px]" : "-left-[100vw]"
      } w-[250px] h-[100vh] z-[1000] duration-100`}
      ref={ref}
    >
      <div className="">
        <Link to="/" className="flex items-center">
          <img src="assets/images/logo.svg" alt="logo" className="w-[50px]" />
          <img
            src="assets/images/afrikart.svg"
            alt="afrikart"
            className="w-[100px]"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <Link
          to=""
          className="px-[10px] py-[5px] border-b-[1px] mt-[1rem]  hover:bg-primaryColor hover:text-white"
        >
          Sign in
        </Link>
        <Link
          to=""
          className="px-[10px] py-[5px] border-b-[1px] hover:bg-primaryColor hover:text-white"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
});

export default SideBar;
