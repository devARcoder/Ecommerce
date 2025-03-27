import React from 'react'
import woman from '../components/assets/womanCard.jpg'
import man from '../components/assets/manCard.jpg'
import heels from '../components/assets/heelsCard.jpg'
const LatestProducts = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-3 px-6 py-2 md:px-10">
    <div
      className="relative bg-no-repeat bg-cover bg-right md:bg-cover md:bg-center text-white md:w-[23rem] md:h-[23rem] py-8 md:px-3 flex items-center justify-center md:justify-start md:items-center"
      style={{ backgroundImage: `url(${woman})`}}
    >
      {/* Overlay for fade opacity effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative flex flex-col space-y-3 justify-center items-start text-start px-6 pt-16 md:pt-36 md:py-6">
        <h1 className='text-2xl font-bold font-mono'>20% Off On Tank Tops</h1>
        <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum</p>
        <button className="bg-white text-sm text-black py-3 font-bold px-5 sm:py-3 md:py-3 md:px-4 hover:bg-black hover:text-white w-full md:w-auto">SHOP NOW</button>
      </div>
    </div>


    <div 
      className="relative bg-no-repeat bg-cover bg-right md:bg-cover md:bg-center text-white md:w-[23rem] md:h-[23rem] py-8 md:px-3 flex items-center justify-center md:justify-start md:items-center"
      style={{ backgroundImage: `url(${man})`}}
    >
      {/* Overlay for fade opacity effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative flex flex-col space-y-3 justify-center items-start text-start px-6 pt-16 md:pt-36 md:py-6 ">
        <h1 className='text-2xl font-bold font-mono'>Latest Eyewear For You</h1>
        <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum</p>
        <button className="bg-white text-sm text-black py-3 font-bold px-5 sm:py-3 md:py-3 md:px-4 hover:bg-black hover:text-white w-full md:w-auto">SHOP NOW</button>
      </div>
    </div>



    <div 
      className="relative bg-no-repeat bg-cover bg-right md:bg-cover md:bg-center text-white md:w-[23rem] md:h-[23rem] py-8 md:px-3 flex items-center justify-center md:justify-start md:items-center"
      style={{ backgroundImage: `url(${heels})`}}
    >
      {/* Overlay for fade opacity effect */}
      <div className="absolute inset-0 bg-[#1f6583] bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative flex flex-col space-y-3 justify-center items-start text-start px-6 pt-16 md:pt-36 md:py-6">
        <h1 className='text-2xl font-bold font-mono'>Let's Lorem Suit Up!</h1>
        <p className='text-lg font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum</p>
        <button className="bg-white text-sm text-black py-3 font-bold px-5 sm:py-3 md:py-3 md:px-4 hover:bg-black hover:text-white w-full md:w-auto">CHECK OUT</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default LatestProducts
