import React from 'react'
import svg1 from "../../assets/svg-1.svg"
import svg2 from "../../assets/svg-2.svg"
import svg3 from "../../assets/svg-3.svg"
import ml_ai from "../../assets/ml-ai.webp"
import Marketing from "../../assets/marketing.webp"
import ios_and from "../../assets/ios_and.webp"
import gaming from "../../assets/gaming.webp"
import development from "../../assets/development.webp"
import designing from "../../assets/designing.webp"
import ciber_security from "../../assets/ciber_security.webp"
import block_chain from "../../assets/block-chain.webp"
import architecture from "../../assets/architecture.webp"
import amazon from "../../assets/amazon.webp"
import animation from "../../assets/animation.png"
import threed from "../../assets/3d.png"

const Courses = () => {
  
  const coursesData = [
    {
      name: "ML & AI",
      img: ml_ai
    },
    {
      name: "Block Chain",
      img: block_chain
    },
    {
      name: "Amazon",
      img: amazon
    },
    {
      name: "Cyber Security",
      img: ciber_security
    },
    {
      name: "Development",
      img: development
    },
    {
      name: "Designing",
      img: designing
    },
    {
      name: "Gaming",
      img: gaming
    },
    {
      name: "Architecture",
      img: architecture
    },
    {
      name: "IOS & AND",
      img: ios_and
    },
    {
      name: "Marketing",
      img: Marketing
    },
    {
      name: "3D",
      img: threed
    },
    {
      name: "Animation",
      img: animation
    },
   
  ]

  return (
    <>
    <div className="my-20 howworks max-w-[1400px] flex flex-col justify-center items-center mx-auto">
          <h1 className='text-4xl font-semibold'>How it works?</h1>
          <div className="work-pics flex justify-around items-center mt-7 w-full md:px-6 md:flex-row flex-col">
               <img className='lg:w-60 lg:h-44 md:w-44 md:h-32 object-contain w-[95%]  h-52' src={svg1} alt="" />
               <img className='lg:w-60 lg:h-44 md:w-44 md:h-32 object-contain  w-[95%]   h-52' src={svg2} alt="" />
               <img className='lg:w-60 lg:h-44 md:w-44 md:h-32 object-contain  w-[95%]   h-52' src={svg3} alt="" />
               
          </div>
    </div>
    <div className="courses mb-10 grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 space-y-10 space-x-10 md:px-16 sm:px-12 px-4 max-w-[1400px] mx-auto">
            {coursesData.map((item) => (
              <div key={item.name} className="course-box rounded-xl shadow-xl flex flex-col justify-center items-center space-y-5 cursor-pointer border py-8 px-3 hover:-translate-y-4 transition-all duration-200">
                  <img className='w-12 h-16 object-contain' src={item.img} alt="" />
                  <h1 className='text-center font-semibold text-md'>{item.name}</h1>
              </div>
            ))}
    </div>
    </>
  )
}

export default Courses
