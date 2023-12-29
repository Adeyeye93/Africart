import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArtworkCard from "../components/artworkCard";
import ServiceCard from "../components/serviceCard";

const LandingPage = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <header>
        <div className="flex justify-between items-center px-[26px] my-[10px]">
          <div className="">
            <Link to="/" className="flex items-center">
              <img
                src="assets/images/logo.svg"
                alt="logo"
                className="w-[50px]"
              />
              <img
                src="assets/images/afrikart.svg"
                alt="afrikart"
                className="w-[100px]"
              />
            </Link>
          </div>
          <nav className="hidden sm:hidden lg:flex">
            <ul className="flex gap-x-[17px] font-[400]">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Products</Link>
              </li>
              <li>
                <Link to="">Services</Link>
              </li>
              <li>
                <Link to="">About us</Link>
              </li>
              <li>
                <Link to="">Blog</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <div className="items-center justify-end gap-x-[22px] px-[26px] py-[10px] text-[14px] hidden sm:hidden lg:flex">
              <Link
                to=""
                className="bg-primaryColor px-[10px] py-[5px] border rounded text-white hover:bg-white hover:border hover:text-primaryColor"
              >
                Sign in
              </Link>
              <Link
                to=""
                className="bg-primaryColor px-[10px] py-[5px] border rounded text-white hover:bg-white hover:border hover:text-primaryColor"
              >
                Sign up
              </Link>
            </div>
            <div>
              <img
                src="assets/images/cart-green.svg"
                alt="cart"
                className="size-[20px] "
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="bg-secondaryColor flex justify-between pt-[10px] px-[27px] overflow-hidden">
          <div className="flex flex-col justify-center">
            <h1 className="font-[800] text-primaryColor text-[30px] max-w-[400px] sm:text-[40px] sm:max-w-[500px] lg:max-w-[600px]">
              Discover Most Beautiful Work Of Art
            </h1>
            <button className="mt-[25px] self-start mb-[20px] bg-primaryColor px-[20px] py-[10px] text-white font-[600] rounded border border-primaryColor hover:bg-white hover:border hover:text-primaryColor">
              Buy now
            </button>
          </div>
          <div className="self-end">
            <img
              src="assets/images/hero.png"
              alt="hero"
              className="w-[250px] max-w-[250px] sm:w-[400px]"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-[10px] mt-[20px] px-[26px]">
          <div className="flex items-center bg-[#F4F4F4] rounded gray-shadow w-[798px]">
            <img
              src="assets/images/search.svg"
              className="size-[15px] ml-[10px]"
              alt="search"
            />
            <input
              type="search"
              name="search"
              value={search}
              placeholder="Search by Location"
              onChange={(e) => handleSearch(e)}
              className="bg-[#F4F4F4] py-[10px] outline-none w-full text-[14px] rounded ml-[10px]"
            />
          </div>
          <div>
            <button className="bg-primaryColor px-[10px] py-[5px] border rounded text-white h-[41px] hover:bg-white hover:border hover:text-primaryColor items-stretch">
              Post
            </button>
          </div>
        </div>

        <div className="artwork-container px-[26px] mt-[20px] bg-[#D4B99626] py-[26px]">
          <ArtworkCard />
          <ArtworkCard />
          <ArtworkCard />
          <ArtworkCard />
          <ArtworkCard />
          <ArtworkCard />
          <ArtworkCard />
          <ArtworkCard />
        </div>

        <div className="bg-primaryColor px-[26px] py-[26px]">
          <h3 className="text-primaryColor bg-secondaryColor w-max mx-auto px-[10px] py-[3px] rounded-[20px] font-[600] ">
            Our Services
          </h3>
          {/* <p className="text-[25px] font-[700] text-white text-center my-[10px]">
            Services We Offer
          </p> */}
          <div className="flex flex-wrap items-center  gap-[20px] justify-center my-[1rem]">
            <ServiceCard
              title="Find your products"
              img="assets/images/background-complete.png"
              description="We offer sale of products through the internet"
              link={null}
            />
            <ServiceCard
              title="Post your products"
              img="assets/images/service2.png"
              description="On our website, you as an artists can post your art work for free"
              link={null}
            />
            <ServiceCard
              title="Get reviewed"
              img="assets/images/service3.png"
              description="Our website helps you to get potential buyer based on your reviews "
              link={null}
            />
          </div>
          <Link
            to=""
            className="text-center flex items-center text-secondaryColor w-max mx-auto px-[10px] py-[3px] rounded-[20px] text-[14px]"
          >
            <span>Learn More</span>
            <img
              src="assets/images/arrow-forward.svg"
              alt="forward"
              className="size-[15px] ml-[5px] invert"
            />
          </Link>
        </div>
        <div className="bg-secondaryColor p-[26px]">
          <div className="flex flex-col justify-center items-center sm:justify-start sm:flex-row gap-x-[40px] mb-[1rem]">
            <img
              src="assets/images/pngwing1.png"
              alt=""
              className="w-[294px] h-[250px]"
            />
            <div>
              <h3 className="text-[20px] sm:text-[25px] font-[800] text-primaryColor w-[280px] mt-[1rem]">
                Find Out A Little More About Us
              </h3>
              <p className="text-primaryColor text-[14px] mt-[1rem] max-w-[350px] leading-6">
                We serves as a digital marketplace, enabling artists to
                showcase, promote, and sell their creations online across the
                globe.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center sm:justify-start sm:flex-row-reverse gap-x-[40px] mb-[1rem]">
            <img
              src="assets/images/pngwing2.png"
              alt=""
              className="w-[294px] h-[250px]"
            />
            <div>
              <h3 className="text-[20px] sm:text-[25px] font-[800] text-primaryColor w-[280px] mt-[1rem]">
                Marketing and Exposure
              </h3>
              <p className="text-primaryColor text-[14px] mt-[1rem] max-w-[350px] leading-6">
                Our website often incorporate marketing tools, helping artists
                gain exposure through search optimization, social media
                indegration, and promotional features within the platform.Z
              </p>
            </div>
          </div>
        </div>
        <div className="bg-primaryColor">

        </div>
      </main>
    </div>
  );
};

export default LandingPage;
