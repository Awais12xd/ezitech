import React from 'react'
import device from "../../assets/devices.webp"

const Invest = () => {
  return (
    <div className=' bg-[#042d89]'>
         <div className="max-w-[1400px] mx-auto invest-cont mt-6 bg-[#042d89] min-h-[200px] py-10">
            <h1 className=' text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center px-4'>It’s time to start investing in yourself</h1>
            <img className='mt-7' src={device} alt="" />
         </div>
    </div>
  )
}

export default Invest
