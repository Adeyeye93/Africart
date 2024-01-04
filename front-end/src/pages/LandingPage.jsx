import React, { useRef, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import ArtworkCard from "../components/artworkCard";
import ServiceCard from "../components/serviceCard";
import SideBar from "../components/sideBar";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const LandingPage = () => {
  const [search, setSearch] = useState("");
  const [sideBar, setSideBar] = useState(false);
  const sidebarRef = useRef(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSideBar();
    }
  }

  return (
    <div className="max-w-[1440px] mx-auto">
      <SideBar status={sideBar} ref={sidebarRef} />
      <header>
        <div className="flex justify-between items-center px-[26px] my-[10px]">
          <div className="flex items-center gap-x-[1rem]">
            <button onClick={handleSideBar} className="sm:hidden">
              <GiHamburgerMenu className="size-[25px] text-primaryColor" />
            </button>
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
          {/* <nav className="hidden sm:hidden lg:flex">
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
          </nav> */}
          <div className="flex items-center">
            <div className="items-center justify-end gap-x-[1rem] text-[14px] mr-[1rem] hidden sm:flex">
              <Link
                to=""
                className="bg-primaryColor px-[10px] py-[5px] border rounded text-white hover:bg-white hover:border hover:text-primaryColor"
              >
                Sign in
              </Link>
              <Link
                to="/sign-up"
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
        <div className="relative hero-section flex justify-between pt-[10px] px-[27px] h-[377px]">
          <div className="flex flex-col justify-center">
            <h1 className="font-[800] text-white text-[35px] max-w-[400px] sm:text-[40px] sm:max-w-[500px] lg:max-w-[500px] hero-text">
              Discover Most Beautiful Work Of Art
            </h1>
            <button className="mt-[25px] self-start mb-[20px] bg-white px-[20px] py-[10px] text-primaryColor text-[15px] rounded border border-primaryColor hover:bg-white hover:border hover:text-primaryColor">
              Buy now
            </button>
          </div>
          {/* <div className="self-end absolute -z-10">
            <img
              src="assets/images/hero.png"
              alt="hero"
              className="w-[250px] max-w-[250px] sm:w-[400px]"
            />
          </div> */}
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
          <ArtworkCard
            image="assets/images/artwork1.png"
            title="Sheri Bakes"
            description="Sculpture of Queen Mother Loybaz"
            price="$35.00"
          />
          <ArtworkCard
            image="assets/images/artwork2.png"
            title="Onoregie Nora"
            description="Scilpture of Benin Ancient Warriors"
            price="$35.00"
          />
          <ArtworkCard
            image="assets/images/artwork3.png"
            title="Ibrahim Musa"
            description="BokoHaram Terrorist"
            price="$35.00"
          />
          <ArtworkCard
            image="assets/images/artwork4.png"
            title="Drak Iben"
            description="Mungfile Still Life Drawing"
            price="$35.00"
          />
          <ArtworkCard
            image="assets/images/artwork5.png"
            title="Bolatito James"
            description="Framed Portarait of Nelson Mandela"
            price="$35.00"
          />
          <ArtworkCard
            image="assets/images/artwork6.png"
            title="Jaye Kuti A.J."
            description="Fela Kuti Framed Portrait"
            price="$35.00"
          />
          <ArtworkCard
            image="assets/images/artwork7.png"
            title="Felix Wilson"
            description="Spirit of Endurance Portrait"
            price="$35.00"
          />
          <ArtworkCard
            image="assets/images/artwork8.png"
            title="Dray Mills"
            description="Mother Elizababe Painting Framed"
            price="$35.00"
          />
        </div>

        <div className="bg-primaryColor px-[26px] py-[26px]">
          <h3 className="text-white text-[20px]  w-max mx-auto px-[10px] rounded-[20px] font-[600]">
            Our Services
          </h3>
          {/* <p className="font-[500] text-white text-center my-[10px]">
            Some Services We Offer
          </p> */}
          <div className="flex flex-wrap items-center  gap-[20px] justify-center my-[1rem]">
            <ServiceCard
              title="Find your products"
              img="assets/images/services1.png"
              description="We offer sale of products through the internet"
              link={null}
            />
            <ServiceCard
              title="Post your products"
              img="assets/images/services2.png"
              description="On our website, you as an artists can post your art work for free"
              link={null}
            />
            <ServiceCard
              title="Get reviewed"
              img="assets/images/services3.png"
              description="Our website helps you to get potential buyer based on your reviews "
              link={null}
            />
          </div>
          <Link
            to=""
            className="text-center mt-[2rem] flex items-center justify-center text-white w-max mx-auto px-[10px] py-[3px] rounded-[20px] text-[14px]"
          >
            <span>Learn More</span>
            <img
              src="assets/images/arrow-forward.svg"
              alt="forward"
              className="size-[15px] ml-[5px] invert"
            />
          </Link>
        </div>
        <div className="bg-[#D4B99626] p-[26px]">
          <div className="flex flex-col justify-center items-center sm:justify-start sm:flex-row gap-x-[40px] mb-[1rem]">
            <img
              src="assets/images/pngwing1.png"
              alt=""
              className="w-[294px] h-[250px]"
            />
            <div>
              <h3 className="text-[20px] sm:text-[25px] font-[800] text-primaryColor mt-[1rem]">
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
              <h3 className="text-[20px] sm:text-[25px] font-[800] text-primaryColor mt-[1rem]">
                Marketing and Exposure
              </h3>
              <p className="text-primaryColor text-[14px] mt-[1rem] max-w-[350px] leading-6">
                Our website often incorporate marketing tools, helping artists
                gain exposure through search optimization, social media
                indegration, and promotional features within the platform.
              </p>
            </div>
          </div>
        </div>
 feature/verification-page
        <div className="bg-primaryColor"></div>

        <div className="bg-primaryColor"></div>
          <div className="mb-[1rem]">
            <h3 className="text-[20px] sm:text-[25px] font-[600] mb-[.75rem]">
              Contact Us From Here
            </h3>
            <p className="text-[14px] w-[230px] mx-auto sm:mx-0">
              You can contact us from here, you can write to us, call us or
              visit our service center, we will gladly assit you.
            </p>
          </div>
          <div className="sm:flex sm:flex-col lg:flex-row lg:gap-x-[5rem] justify-between items-center text-[14px]">
            <p>
              <p>Telephone: 09031378112</p>
              <p>Email: afrikart@gmail.com</p>
              <p>Location: Africa-Nigeria</p>
            </p>
            <div className="sm:mt-[1rem] sm:self-start bg-primaryColor text-white w-max mx-auto sm:mx-0 mt-[1rem] py-[5px] rounded-[10px]">
              <button className="px-[1rem]">Contact Us</button>
            </div>
          </div>
        </div>

        <div className="bg-primaryColor text-white p-[40px] sm:h-[400px]">
          <div className="flex flex-wrap sm:justify-around sm:flex-row gap-y-[1rem] gap-x-[3rem]">
            <div>
              <h3 className="text-[20px] font-[600] mb-[.75rem]">
                Our Services
              </h3>
              <ul className="text-[14px] flex flex-col gap-y-[10px]">
                <li>Pricing</li>
                <li>Discounts</li>
                <li>Report a bug</li>
                <li>Terms of Service</li>
                <li>Buy on Afrikat</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[20px] font-[600] mb-[.75rem]">Community</h3>
              <ul className="text-[14px] flex flex-col gap-y-[10px]">
                <li>Support</li>
                <li>F&A</li>
                <li>Customer Help</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[20px] font-[600] mb-[.75rem]">
                Our Company
              </h3>
              <ul className="text-[14px] flex flex-col gap-y-[10px]">
                <li>Blog</li>
                <li>Our Mission</li>
                <li>Get in Touch</li>
              </ul>
            </div>
            <div className="flex gap-x-[1.5rem]">
              <Link>
                <FaFacebookF className="size-[20px]" />
              </Link>
              <Link>
                <FaTwitter className="size-[20px]" />
              </Link>
              <Link>
                <RiInstagramFill className="size-[20px]" />
              </Link>
            </div>
          </div>
        </div>
 main
      </main>
    </div>
  );
};

export default LandingPage;
