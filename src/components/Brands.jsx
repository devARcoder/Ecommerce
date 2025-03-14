
import React, { useState, useEffect } from "react";
import img1 from "./assets/brands/armani.png";
import img2 from "./assets/brands/gucci.png";
import img3 from "./assets/brands/nike.png";
import img4 from "./assets/brands/prada.png";
import img5 from "./assets/brands/puma.png";
import img6 from "./assets/brands/vl.png";

import LatestProducts from "./LatestProducts";

const brandData = [
  { src: img1, name: "Armani" },
  { src: img2, name: "Gucci" },
  { src: img3, name: "Nike" },
  { src: img4, name: "Prada" },
  { src: img5, name: "Pumma" },
  { src: img6, name: "Louis Vuitton" },
];

const Brands = () => {
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(
    window.innerWidth >= 768 ? 4 : 1
  );

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 768 ? 4 : 1);
      setIndex(0); // Reset index on resize to prevent sliding issues
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % brandData.length);
    }, itemsToShow === 1 ? 3000 : 2000); // Slow down for mobile

    return () => clearInterval(interval);
  }, [itemsToShow]);

  return (
    <>
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * (100 / itemsToShow)}%)` }}
      >
        {brandData.map((brand, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-full md:w-1/4 p-3"
            style={{ flex: `0 0 ${100 / itemsToShow}%`, textAlign: "center" }}
          >
            <img src={brand.src} alt={brand.name} className="h-16 md:h-20 object-contain mx-auto" />
            <span className="text-xl font-bold md:text-lg font-semibold mt-2">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
    <LatestProducts/>
    </>
  );
};

export default Brands;
