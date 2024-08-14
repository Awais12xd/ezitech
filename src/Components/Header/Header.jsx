import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import logoSm from "../../assets/logo-sm.png";

const Header = () => {
  const [searchAllow, setSearchAllow] = useState(false);
  const [menuAllow, setMenuAllow] = useState(false);
  const [slideDropAllow1 , setslideDropAllow1] = useState(false)
  const [slideDropAllow2 , setslideDropAllow2] = useState(false)

  const [seachId, setSearchId] = useState("");

  const toggleSearchBox = () => {
    setSearchAllow(!searchAllow);
  };

  const toggleMenuSlide = () => {
    setMenuAllow(!menuAllow);
  };
  const toggleSlideDrop1 = () => {
    setslideDropAllow1(!slideDropAllow1)
  }
  const toggleSlideDrop2 = () => {
    setslideDropAllow2(!slideDropAllow2)
  }

  return (
    <>
      <div className="top-outer-box  bg-[#3275db] w-full ">
        <div className="top-section bg-[#3275db] min-h-10 py-1 w-full flex flex-col-reverse lg:justify-around lg:items-center  text-white lg:flex-row justify-end  items-end max-w-[1400px] mx-auto px-2">
          <div className="top-1 flex lg:justify-between  space-x-5 lg:w-[60%] flex-wrap lg:mt-0 mt-2 lg:items-center items-end justify-end">
            <div className="call text-xs ">
              <i className="fa-solid fa-phone"></i> +92 3455555396
            </div>
            <div className="address text-xs lg:text-justify text-end">
              <i className="fa-solid fa-location-dot "></i> Westridge 1, Office
              #304-B Peshawar Road, Rawalpindi, Pakistan
            </div>
            <div className="time text-xs">
              <i className="fa-regular fa-clock"></i>
              Mon - Fri 8.00 - 20.00
            </div>
          </div>
          <div className="top-2 flex justify-around space-x-4 items-center lg:w-[30%]">
            <div className="icons flex space-x-3">
              <i className="fa-brands fa-facebook text-xs cursor-pointer"></i>
              <i className="fa-brands fa-instagram text-xs cursor-pointer"></i>
              <i className="fa-brands fa-behance text-xs cursor-pointer"></i>
              <i className="fa-brands fa-linkedin text-xs cursor-pointer"></i>
              <i
                className="fa-brands fa-facebook
            text-xs cursor-pointer"
              ></i>
            </div>
            <div className="user flex space-x-2 items-center">
              <i className="fa-solid fa-user text-sm"></i>
              <span className="cursor-pointer border-r-2 pr-2 mr-3 border-gray-400 text-sm">
                Login{" "}
              </span>

              <span className="cursor-pointer text-sm">Register</span>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar shadow-lg w-full lg:bg-transparent bg-white">
        <nav className="max-w-[1400px] mx-auto border-b min-h-28 lg:px-8 md:px-7 sm:px-5 px-3 flex justify-between items-center space-x-2">
          <div className="logo flex items-center justify-center">
            <a href="#">
              <img className="w-44 h-14 object-contain hidden lg:block" src={logo} alt="" />
              <img className="w-32 h-14 object-contain block lg:hidden" src={logoSm} alt="" />
            </a>
          </div>
          <div className="navItems  justify-center items-center hidden lg:flex">
            <ul className="flex justify-between items-center space-x-8">
              <li>
                <a
                  className="font-bold text-sm text-white border-b-4 pb-5 border-blue-600 hover:text-blue-300 transition-all duration-200"
                  href="#home"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-sm text-white hover:text-blue-300 transition-all duration-200"
                  href="#home"
                >
                  ABOUT US
                </a>
              </li>
              <li id="nav-menu-1" className="">
                <a
                  className="text-white font-bold text-sm hover:text-blue-500 "
                  href="#"
                >
                  CERTIFICATIONS
                </a>

                <ul className="htmlCss-sub-menu sub-menu bg-white w-56">
                  <li className="py-4 w-full px-2 shadow-2xl text-sm">
                    <a href="#" className="hover:text-blue-500">
                      Onsite Courses
                    </a>
                  </li>
                </ul>
              </li>
              <li id="nav-menu-1" className="">
                <a
                  className="text-white font-bold text-sm hover:text-blue-500 "
                  href="#"
                >
                  CAREERS
                </a>

                <ul className="htmlCss-sub-menu sub-menu bg-white w-56 shadow-2xl">
                  <li className="py-4 w-full px-2  text-sm">
                    <a href="#" className="hover:text-blue-500">
                      Internships
                    </a>
                  </li>
                  <li className="pb-4 pt-2 w-full px-2  text-sm">
                    <a href="#" className="hover:text-blue-500">
                      Job Opportunities
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="font-bold text-sm text-white hover:text-blue-300 transition-all duration-200"
                  href="#home"
                >
                  SEMINARS
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-sm text-white hover:text-blue-300 transition-all duration-200"
                  href="#home"
                >
                  TECH BLOGS
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-sm text-white hover:text-blue-300 transition-all duration-200"
                  href="#home"
                >
                  IPORTAL LOGIN
                </a>
              </li>
            </ul>
          </div>
          <div className="like-search space-x-4 items-center justify-center mr-3 hidden lg:flex">
            <div className="like border-l pl-4 h-8 flex items-center">
              <i class="text-xl fa-regular fa-heart py-2 px-3 cursor-pointer hover:bg-green-400 rounded-full text-white"></i>
            </div>
            <div
              className="search border-[3px] border-white hover:border-blue-500 cursor-pointer relative overflow-hidden 
              "
              id="slide-bg"
            >
              <div className="absolute w-10 h-7 bg-blue-500" id="box"></div>
              <button onClick={toggleSearchBox}>
                <i class="fa-solid fa-magnifying-glass text-white text-sm px-2 py-1 relative "></i>
              </button>
            </div>
          </div>
          <div 
             id="searchBar"
            className={`items-center justify-center z-10 ${
              searchAllow ? "flex" : "hidden"
            } absolute h-[100vh] w-full left-0  top-0 bottom-0 right-0`}
          >
            <div className="searchBox-content w-[600px] flex justify-center flex-col relative h-[100%]">
              <div
                className="cross absolute text-white cursor-pointer py-2 px-4 rounded-full top-0 right-0 mt-4 bg-gray-400"
                onClick={toggleSearchBox}
              >
                <button>
                  <i class="fa-solid fa-xmark text-xl text-white"></i>
                </button>
              </div>
              <h1 className="text-white text-xl font-bold ">Search</h1>
              <div className="search-input mt-3 w-full flex h-[70px]  bg-white rounded-md overflow-hidden">
                <input
                  type="text"
                  className="text-xl text-gray-700 px-3 w-[90%] h-[100%] border-none outline-none"
                  placeholder="Start typing here..."
                />
                <button className="bg-blue-500 w-[10%] hover:bg-blue-700">
                  <i class="fa-solid fa-magnifying-glass text-white text-lg px-2 py-1hover:to-blue-300 "></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="menu-icon block lg:hidden cursor-pointer transition-all duration-700"
            onClick={toggleMenuSlide}
          >
            <i class="fa-solid fa-bars text-[#3275db] text-3xl "></i>
          </div>
        </nav>
      </div>
      <div className={`menuBar w-full ${menuAllow ? "flex" : "hidden"} px-2`}>
        <ul className="w-full block lg:hidden">
          <li className="w-full pl-5 h-16 bg-[#f0f2f5] font-semibold text-lg flex items-center border text-[#555555]  hover:text-blue-500 cursor-pointer">
            <a href="#">HOME</a>
          </li>
          <li className="w-full pl-5 h-16 bg-[#f0f2f5] font-semibold text-lg flex items-center border text-[#555555]  hover:text-blue-500 cursor-pointer">
            <a href="#">ABOUT US</a>
          </li>
          <li  className={`w-full pl-5 h-16  font-semibold text-lg  border   cursor-pointer flex justify-between items-center px-4 ${slideDropAllow1 ? "bg-[#3275db] text-white" : "bg-[#f0f2f5] text-[#555555]  hover:text-blue-500"}`}>
            <a href="#">CERTIFICATIONS</a>
            <button onClick={toggleSlideDrop1} className=" px-2 py-2">
            <i class="fa-solid fa-chevron-down"></i>
            </button>
          </li>
          <li className={`subMenu1 ${slideDropAllow1 ? "flex" : "hidden"} bg-white pl-4 h-14 items-center transition-all duration-1000`}>
              <ul>
                <li className=" text-black flex  items-center cursor-pointer hover:text-blue-500">
                 <span className="font-bold text-2xl mb-[9px] mr-2">.</span> Onsite Internships
                </li>
              </ul>
            </li>
            <li  className={`w-full pl-5 h-16 font-semibold text-lg  border  cursor-pointer flex justify-between items-center px-4
            ${slideDropAllow2 ? "bg-[#3275db] text-white" : "bg-[#f0f2f5] text-[#555555]  hover:text-blue-500"}
            `}>
            <a href="#">CAREERS</a>
            <button onClick={toggleSlideDrop2} className=" px-2 py-2">
            <i class="fa-solid fa-chevron-down transform rotate-3"></i>
            </button>
          </li>
          <li className={`subMenu1 ${slideDropAllow2 ? "flex" : "hidden"} bg-white pl-4 h-20 items-center transition-all duration-1000 `}>
              <ul className="py-3">
                <li className=" text-black flex  items-center cursor-pointer hover:text-blue-500 ">
                 <span className="font-bold text-2xl mb-[9px] mr-2">.</span> Internships
                </li>
                <li className=" text-black flex  items-center cursor-pointer hover:text-blue-500">
                 <span className="font-bold text-2xl mb-[9px] mr-2">.</span> Job Opportunities
                </li>
              </ul>
            </li>
          <li className="w-full pl-5 h-16 bg-[#f0f2f5] font-semibold text-lg flex items-center border text-[#555555]  hover:text-blue-500 cursor-pointer">
            <a href="#">SEMINARS</a>
          </li>
          <li className="w-full pl-5 h-16 bg-[#f0f2f5] font-semibold text-lg flex items-center border text-[#555555]  hover:text-blue-500 cursor-pointer">
            <a href="#">TECH BLOGS</a>
          </li>
          <li className="w-full pl-5 h-16 bg-[#f0f2f5] font-semibold text-lg flex items-center border text-[#555555]  hover:text-blue-500 cursor-pointer">
            <a href="#">IPORTAL LOGIN</a>
          </li>
          <div className="search-input w-full flex h-[60px]  bg-[#f0f2f5] rounded-md overflow-hidden">
                <input
                  type="text"
                  className="text-xl text-gray-700 px-3 w-[90%] h-[100%] border-none outline-none"
                  placeholder="Start typing here..."
                />
                <button className="bg-blue-500 w-[10%] hover:bg-blue-700">
                  <i class="fa-solid fa-magnifying-glass text-white text-lg px-2 py-1hover:to-blue-300 "></i>
                </button>
              </div>
        </ul>
      </div>
    </>
  );
};

export default Header;
