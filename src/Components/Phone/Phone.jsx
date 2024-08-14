import React from 'react'
import phone from "../../assets/phone.webp"
import play from "../../assets/play-store.png"
import apple from "../../assets/appstore.webp"

const Phone = () => {
  return (
   <>
      <div className="phone-cont flex max-w-[1400px] justify-center my-10 w-full space-x-3 mx-auto">
        
              <div className="1 h-[300px] sm:h-[350px] md:h-[480px] lg:h-[530px] overflow-hidden w-[50%] flex justify-end ">
                <div className="circle w-44 h-44 sm:w-64 sm:h-64  md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-[#385bce] flex justify-start items-start">
                    <img className='w-[100%] h-[300px] sm:h-[480px] md:h-[550px] lg:h-[600px]  object-contain ' src={phone} alt="" />
                </div>
              </div>
              <div className="2 w-[50%] flex flex-col sm:pr-10 md:px-5 lg:px-10 mt-14">
                <h1 className='md:text-4xl lg:text-5xl  font-semibold mb-10 sm:text-3xl text-xl'>Learning <span className='text-[#385bce]'>anytime</span> from anytime</h1>
                <p className='md:text-sm lg:text-base hidden md:block text-justify '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio vel voluptate voluptatibus in quasi mollitia consectetur veritatis sequi perferendis obcaecati ea ipsam optio eius possimus, provident dolor nihil ducimus. Iste id quam animi quia soluta ipsum amet quod at explicabo.</p>
                <div className="img flex space-y-1 sm:space-y-0  sm:space-x-6 md:mt-7 sm:flex-row flex-col">
                    <img className='cursor-pointer lg:w-44 md:w-32 object-contain sm:w-28 w-24' src={apple} alt="" />
                    <img className='cursor-pointer lg:w-44 md:w-32 object-contain sm:w-28 w-24' src={play} alt="" />
                </div>
              </div>
      </div>
   </>
  )
}

export default Phone;
