import React, { useState, useEffect } from "react";
import img1 from "./assets/manCard.jpg";
import img2 from "./assets/womanCard.jpg";
import img3 from "./assets/heelsCard.jpg";
import img4 from "./assets/manCard.jpg";
import img5 from "./assets/womanCard.jpg";

const images = [img1, img2, img3, img4, img5];

const Brands = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(window.innerWidth >= 768 ? 4 : 1);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 4 : 1);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (images.length - itemsPerView + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [itemsPerView]);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div
        className="flex gap-4 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * (100 / itemsPerView)}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-full md:w-1/4 l">
            <img src={img} alt={`Brand ${i + 1}`} className="w-full h-32 object-cover md:h-40" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
