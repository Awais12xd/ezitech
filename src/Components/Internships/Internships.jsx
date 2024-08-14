import React from "react";
import one from "../../assets/1.png"
import two from "../../assets/2.png"
import three from "../../assets/3.png"
import four from "../../assets/4.png"
import five from "../../assets/5.png"
import six from "../../assets/6.png"

const Internships = () => {
  const data = [
    {
      name: "HTML/CSS JAVASCRIPT",
      img:one
    },
    {
      name: "GRAPHIC DESIGNING",
      img:two
    },
    {
      name: "DIGITAL MARKETING",
      img:three
    },
    {
      name: "FLUTTER DEVELOPMENT",
      img:four
    },
    {
      name: "MACHINE LEARNING",
      img:five
    },
    {
      name: "MERN DEVELOPMENT",
      img:six
    },
  ];

  return (
    <>
      <div className="intern-cont my-10 flex flex-col px-2 sm:px-6 md:px-10 justify-center items-center w-full mx-auto max-w-[1400px]">
        <h1 className="text-2xl font-bold text-center">Perfect Internship's For You</h1>
        <div className="internships grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 space-y-4 justify-between items-center w-full mt-7">
          {data.map((item) => (
            <div
              key={item.name}
              className="box rounded-xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer"
            >
              <div className="top-blue bg-[#24579f] px-5 pt-5 pb-2">
                <div className="heading flex justify-between items-center">
                      <h1 className="text-white font-semibold w-20 text-xl border-b-2 pb-3">{item.name}</h1>
                      <img className="w-14 h-14" src={item.img} alt="" />
                </div>
                <div className="owner">
                    <p className="text-white font-extralight mt-2">Ezitech Institute</p>
                </div>
              </div>
              <div className="below-white py-6 px-5 flex flex-col ">
                    <div className="bw-1 flex flex-col space-y-4">
                         <div className="bw-1-1">
                         <i class="fa-solid fa-user p-2 rounded-full text-[#24579f] bg-[#f0f7f4] mr-1"></i> Employment- <span className="px-1 rounded-sm bg-[#f0f7f4] font-light">Hybrid</span>
                         </div>
                         <div className="bw-1-2">
                         <i class="fa-solid fa-location-dot p-2 rounded-full text-[#24579f] bg-[#f0f7f4] mr-1"></i>Location- <span className="px-1 rounded-sm bg-[#f0f7f4] font-light">Rawalpindi</span>
                         </div>
                         <div className="bw-1-3">
                         <i class="fa-solid fa-bag-shopping p-2 rounded-full text-[#24579f] bg-[#f0f7f4] mr-1"></i>Job Type- <span className="px-1 rounded-sm bg-[#f0f7f4] font-light mr-2">Full Time</span><span className="px-1 rounded-sm bg-[#f0f7f4] font-light mr-2">Part Time</span>
                         </div>
                    </div>
                    <div className="bw-2 mt-5 mx-auto">
                        <button className="px-3 py-2 rounded-md bg-[#24579f] cursor-pointer text-white">
                            Read More
                        </button>
                    </div>
              </div>
            </div>
          ))}
        </div>
        <div className="last-btn flex justify-center mt-5">
            <button className="px-3 py-2 rounded-md bg-[#24579f] cursor-pointer text-white">
               Learn More
            </button>
        </div>
      </div>
    </>
  );
};

export default Internships;
