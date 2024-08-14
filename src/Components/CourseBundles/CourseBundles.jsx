import React from 'react'
import "./coursebundles.css"
import react from "../../assets/react.webp"
import node from "../../assets/node.webp"
import javascript from "../../assets/javascript.webp"
import fiverr from "../../assets/fiverr.webp"
import digital from "../../assets/digital.webp"
import google_ads from "../../assets/google-ads.webp"
import linkedin from "../../assets/linkedin.webp"
import business from "../../assets/my-business.webp"
import seo from "../../assets/seo.webp"
import copyright from "../../assets/copyright.webp"









const CourseBundles = () => {
  return (
    <>
    <div className="cont my-12 flex flex-col justify-center items-center space-y-11 min-h-[700px] max-w-[1400px] mx-auto">
        <div className="1 flex flex-col space-y-5 justify-center items-center px-4 ">
            <h1 className='text-4xl font-semibold text-center'>Limited-Time Summer Course Bundles!</h1>
            <p className='text-center font-light text-sm'>Note : All these bundles have recorded luctures</p>
        </div>
        <div className="2 flex flex-col md:flex-row justify-between px-2 sm:px-10 md:px-12 lg:px-20 w-full  items-center ">
              <div className="first-box hover:shadow-2xl border  w-full md:w-[47%] cursor-pointer">
                    <div className="top-blue px-5 bg-[#385bce] py-6 h-32 flex flex-col justify-center items-center">
                        <h1 className='text-center text-xl text-white '>Web Development Course with Industrial Projects</h1>
                        <p className='text-white text-center font-light text-md mt-3'>4 Courses</p>
                    </div>
                    <div className="below-white overflow-hidden h-[240px] hover:h-[420px] flex flex-col justify-between items-end transition-all duration-300">
                           
                          <div className="bw-1 h-[400px] overflow-y-auto">
                          <div className="bw-boxes h-20 flex justify-between items-center px-4 space-x-2 border-b">
                            <img src={javascript} className='md:block hidden w-20 h-12 object-contain' alt="" />
                            <h1 className='text-sm px-1'>From Novice to Expert , The Complete Javascript Course 2024!</h1>
                            <p className='font-bold text-gray-500'>PKR7,600</p>
                           </div>
                           <div className="bw-boxes h-20 flex justify-between items-center px-4 space-x-2 border-b">
                            <img src={react} className='md:block hidden w-20 h-12 object-contain' alt="" />
                            <h1 className='text-sm px-1'>The Complete Guide to React (incl Hooks, React Router, Redux)</h1>
                            <p className='font-bold text-gray-500'>PKR8,000</p>
                           </div>
                           <div className="bw-boxes h-20 flex justify-between items-center px-4 space-x-2 border-b">
                            <img src={fiverr} className='md:block hidden w-20  h-12 object-contain' alt="" />
                            <h1 className='text-sm px-1'>   Sell Fiver Gigs Like The Top 1% in Freelancing in 2024</h1>
                            <p className='font-bold text-gray-500'>PKR4,500</p>
                           </div>
                           <div className="bw-boxes h-20 flex justify-between items-center px-4 space-x-2">
                            <img src={node} className='md:block hidden w-20 h-12 object-contain' alt="" />
                            <h1 className='text-sm px-1'>The Complete Bootcamp 2024:Node.js,Express,MongoDB,and More</h1>
                            <p className='font-bold text-gray-500'>PKR13,000</p>
                           </div>
                          </div>
                          <div className="bw-2 p-2">
                            <p className='font-bold'>PKR10,000 <span className='font-extralight line-through'>PKR33,100</span></p>
                          </div>
                    </div>
                    
              </div>
              <div className="second-box border hover:shadow-2xl  w-full md:w-[47%] cursor-pointer md:mt-0 mt-9">
                    <div className="top-blue px-5 bg-[#385bce] py-6 h-32 flex flex-col justify-center items-center">
                        <h1 className='text-center text-xl text-white '>Digital Marketing Mastery Learn for the best</h1>
                        <p className='text-white text-center font-light text-md mt-3'>6 Courses</p>
                    </div>
                    <div className="below-white overflow-hidden h-[240px] hover:h-[420px] flex flex-col justify-between items-end transition-all duration-300">
                           
                          <div className="bw-1 h-[400px] overflow-y-auto mb-10">
                          <div className="bw-boxes h-20 flex justify-between items-center px-4 space-x-2 border-b">
                            <div className="md:block hidden">
                            <img src={business} className='w-20 h-12 object-contain' alt="" />
                            </div>
                            <h1 className='text-sm px-1'>TripAdvisor, Google My Business, and Local SEO</h1>
                            <p className='font-bold text-gray-500'>PKR5,000</p>
                           </div>
                           <div className="bw-boxes h-20 flex justify-between items-center px-4 space-x-2 border-b">
                            <img src={google_ads} className='md:block hidden w-20 h-12 object-contain' alt="" />
                            <h1 className='text-sm px-1'>Youtube ads and Google ads</h1>
                            <p className='font-bold text-gray-500'>PKR5,000</p>
                           </div>
                           <div className="bw-boxes h-20 flex justify-between items-center px-4 space-x-2 border-b">
                            <img src={seo} className='md:block hidden w-20 h-12 object-contain' alt="" />
                            <h1 className='text-sm px-1'>Search Engine Optimization (SEO)</h1>
                            <p className='font-bold text-gray-500'>PKR6,000</p>
                           </div>
                           <div className="bw-boxes h-20 flex justify-between items-center px-4 space-x-2">
                            <img src={digital} className='md:block hidden w-20 h-12 object-contain' alt="" />
                            <h1 className='text-sm px-1'>Advance Digital Marketing</h1>
                            <p className='font-bold text-gray-500'>PKR6,500</p>
                           </div>
                           <div className="bw-boxes h-20 flex justify-between items-center px-4 space-x-2">
                            <img src={linkedin} className='md:block hidden w-20 h-12 object-contain' alt="" />
                            <h1 className='text-sm px-1'>Linkedin Orientation</h1>
                            <p className='font-bold text-gray-500'>PKR6,500</p>
                           </div>
                           <div className="bw-boxes h-20 flex justify-between items-center px-4 space-x-2">
                            <img src={copyright} className='md:block hidden w-20 h-12 object-contain' alt="" />
                            <h1 className='text-sm px-1'>Content Marketing and Copyright</h1>
                            <p className='font-bold text-gray-500'>PKR4,500</p>
                           </div>
                          </div>
                          <div className="bw-2 p-2">
                            <p className='font-bold'>PKR8,000 <span className='font-extralight line-through'>PKR32,500</span></p>
                          </div>
                    </div>
                    
              </div>
        </div>
    </div>
    </>
  )
}

export default CourseBundles
