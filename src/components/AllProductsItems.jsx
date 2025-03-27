import React from "react";

const AllProductsItems = ({ image, title, desc, price}) => {
  return (
    <>
      <div className="px-3 py-3 flex flex-col justify-center items-start">
        <img
          src={image || "https://via.placeholder.com/150"}
          alt={title}
          className="w-full h-36 md:h-48 object-cover rounded-md"
        />
        <div className="flex flex-col space-y-2 mt-2">
          {/* <div className="realtive">
          <h1 className="text-xl font-bold font-serif">{title} </h1>
          <span className="absolute -mt-10 ml-20 rotate-12 sm:-mt-6 sm:ml-36 sm:rotate-0 md:-mt-6 md:ml-40 md:rotate-0 text-[7px] font-semibold font-serif bg-green-500 text-white w-16 px-1 py-1 rounded-full">
            AR Products
          </span>
          </div> */}
          {/* Fix: Handle missing category */}
          <p className="text-gray-700 line-clamp-2 text-lg font-serif">
            {desc}
          </p>
          <p className="text-green-500 font-semibold">${price}.00</p>
          <div className="flex space-x-2">
            <div className="1 h-4 w-4 bg-pink-500 rounded-full cursor-pointer"></div>
            <div className="2 h-4 w-4 bg-gray-400 rounded-full cursor-pointer"></div>
            <div className="3 h-4 w-4 bg-blue-400 rounded-full cursor-pointer"></div>
            <div className="3 h-4 w-4 bg-orange-500 rounded-full cursor-pointer"></div>
          </div>
          <div className="flex space-x-1 justify-start items-center ">
            <span className="text-2xl text-yellow-500">&#9733;</span>
            <span className="text-2xl text-yellow-500">&#9733;</span>
            <span className="text-2xl text-yellow-500">&#9733;</span>
            <i className="fa fa-star-half-full text-yellow-500 text-lg mt-1.5"></i>
          </div>
        </div>
      <button className="my-1 bg-none border border-black px-2 py-1 w-full hover:bg-green-500 hover:text-white hover:border hover:border-green-500 hover:rounded-md">Order Now</button>
      </div>
    </>
  );
};

export default AllProductsItems;
