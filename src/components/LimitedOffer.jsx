import React from 'react';
import offerBanner from './assets/manBanner.png';

const LimitedOffer = () => {
  return (
    <>
    <div className="bg-gray-50">

    
    <div className="relative bg-blue-400 text-white mx-9 md:mx-10 rounded-l-xl md:rounded-l-lg mt-16 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between w-full overflow-hidden">
      {/* Overlay for fade opacity effect (only on mobile) */}
      <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-0"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center md:items-start text-center md:text-left pt-24 py-8 px-4 sm:px-6 md:px-24 z-10 space-y-4 md:space-y-6">
      <p className="text-lg sm:text-xl font-bold">Limited Time Offer</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
        Limited Time Offer
        Special Edition
        </h1>
        <p className="text-sm sm:text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
        <p className="text-lg sm:text-xl font-bold">Buy This T-shirt At 20% Discount, Use Code OFF20</p>
        <div className="btns flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 font-semibold w-full px-2">
          <button className="bg-white text-black rounded-l-xl md:rounded-l-md py-3 px-5 sm:py-3 md:py-2 hover:bg-black hover:text-white w-full md:w-auto">
            SHOP NOW
          </button>
          
        </div>
      </div>

      {/* Image */}
      <img
        className="absolute md:relative w-full md:w-1/2 h-full object-cover md:object-contain md:top-14 left-0 md:left-auto md:right-0 opacity-15 md:opacity-100 md:h-[70vh]"
        src={offerBanner}
        alt="Offer Banner"
      />
    </div>
    </div>
    </>
  );
};

export default LimitedOffer;
