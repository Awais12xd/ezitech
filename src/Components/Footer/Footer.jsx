import React from 'react'
import fone from "../../assets/footer-1.webp"
import ftwo from "../../assets/footer-2.webp"

const Footer = () => {
  return (
    <div className='bg-[#042d89] py-8'>
        <div className="footer-cont-1 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between it px-4 sm:px-10 lg:space-y-0 space-y-10 sm:space-x-5 ">
             <div className="1">
                   <h1 className='text-white font-semibold text-xl  mb-6'>ABOUT</h1>
                   <p className='text-white  text-sm'>Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.</p>
             </div>
             <div className="2">
             <h1 className='text-white font-semibold text-xl  mb-6'>POPULAR COURSES</h1>
             <div className="courses flex flex-col space-y-5">
                  <div className="course-1 flex space-x-2">
                    <img className='w-20 h-12 object-contain' src={fone} alt="" />
                    <div className="headings">
                        <h1 className='cursor-pointer lg font-semibold text-white hover:text-blue-700'>Online Arbitrage Mastermind 2.0 [R...</h1>
                        <p className='m-0 text-gray-500 text-sm'>By Husnain Ali</p>
                    </div>
                  </div>
                  <div className="course-2 flex space-x-2">
                    <img className='w-20 h-12 object-contain' src={ftwo} alt="" />
                    <div className="headings">
                        <h1 className='cursor-pointer lg font-semibold text-white hover:text-blue-700'>The Complete Bootcamp 2024:Node.j...</h1>
                        <p className='m-0 text-gray-500 text-sm'>By Ezitech</p>
                    </div>
                  </div>
             </div>
             </div>
             <div className="3">
             <h1 className='text-white font-semibold text-xl  mb-6'>PAGES</h1>
             <ul className='flex flex-col mt-4 space-y-4 px-2'>
                <li className='text-white text-sm font-light hover:text-blue-700 cursor-pointer'>
                    BLOG
                </li>
                <li className='text-white text-sm font-light hover:text-blue-700 cursor-pointer'>
                    EZICODING
                </li>
                <li className='text-white text-sm font-light hover:text-blue-700 cursor-pointer'>
                    INTERNSHIP
                </li>
                <li className='text-white text-sm font-light hover:text-blue-700 cursor-pointer'>
                    OUR SERVICES
                </li>
             </ul>
             </div>
             <div className="4">
             <h1 className='text-white font-semibold text-xl  mb-6'>CONTACT</h1>
             <div className="info mt-4 flex flex-col space-y-4">
                  <div className="location flex space-x-3">
                       <div className="icon">
                       <i className="fa-solid fa-location-dot text-[#2575ed] text-lg"></i>
                       </div>
                       <p className='text-white font-light text-sm'>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
                  </div>
                  <div className="phone flex space-x-3">
                       <div className="icon">
                       <i className="fa-solid fa-phone text-[#2575ed] text-lg"></i>
                       </div>
                       <p className='text-white font-light text-sm'>+923455555396</p>
                  </div>
                  <div className="mail flex space-x-3">
                       <div className="icon">
                       <i className="fa-solid fa-envelope text-[#2575ed] text-lg"></i>
                       </div>
                       <p className='text-white font-light text-sm'>info@ezitech.org</p>
                  </div>
             </div>
             </div>
        </div>
        <div className="footer-cont-2 mt-14 mb-6 ">
             <p className='text-center text-sm text-white'>Copyright © 2024 Ezitech Institute | Design & Develop by <span className='cursor-pointer  underline hover:text-blue-600'>Eziline Software House</span></p>

        </div>
    </div>
  )
}

export default Footer
