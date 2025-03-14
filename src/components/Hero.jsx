import React from "react";
import manBanner from "./assets/manBanner.jpg";
import Brands from "./Brands";
import Store from "./Store";

const Hero = () => {
  return (
    <>
    <div 
      className="relative bg-no-repeat bg-cover bg-right md:bg-cover md:bg-center text-white md:h-screen py-8 md:px-8 flex items-center justify-center md:justify-start md:items-center"
      style={{ backgroundImage: `url(${manBanner})`}}
    >
      {/* Overlay for fade opacity effect */}
      <div className="absolute inset-0 bg-[#1f6583] bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative flex flex-col justify-center items-center md:justify-start md:items-start md:w-3/5 space-y-6 sm:space-y-8 md:space-y-10 py-8 sm:py-10 md:py-10 text-center md:text-start px-4 sm:px-6 md:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold font-serif">Raining Offers For Hot Summer!</h1>
        <p className="text-lg sm:text-xl font-semibold">25% Off On All Products</p>
        <div className="btns flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4 font-semibold w-full px-2">
          <button className="bg-white text-black py-2 px-5 sm:py-3 md:py-0 hover:bg-black hover:text-white w-full md:w-auto">SHOP NOW</button>
          <button className="bg-none text-white border border-white py-2 sm:py-3 md:py-2 px-4 hover:bg-white hover:text-black w-full md:w-auto">FIND MORE</button>
        </div>
      </div>
    </div>
    <Brands/>
    <Store/>
    </>
  );
};

export default Hero;