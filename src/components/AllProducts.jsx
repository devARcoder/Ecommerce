import React, { useState, useEffect } from 'react';
import StoreItems from './StoreItems';
import LoadingAnimatPulse from '../components/LoadingAnimatPulse';

const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storeProducts = async () => {
      try {
        const url = 'https://api.escuelajs.co/api/v1/products';
        setLoading(true); // Start loading

        const response = await fetch(url);
        const data = await response.json();

        setProducts(data);
        setLoading(false); // Stop loading after setting products
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    storeProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center my-6">
        <h1 className="text-5xl text-gray-900 font-extrabold font-serif">Shop</h1>
        <h3 className="text-1xl text-gray-500 mt-4 font-extrabold font-serif">
          Buy everything what you need
        </h3>
      </div>

      {/* Grid with 2 columns for mobile, 3 for tablets, and 5 for desktops */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 px-4 mt-6 gap-4">
        {loading
          ? // Show loading animation in each grid item while fetching
            Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="flex justify-center items-center">
                <LoadingAnimatPulse />
              </div>
            ))
          : // Show actual products after loading
            products.map((element) => (
              <div key={element.id} className="w-full">
                <StoreItems
                  image={element.images?.[0] || 'default-image-url.jpg'}
                  title={element.title ? element.title.slice(0, 12) : "No Title"}
                  desc={element.description ? element.description.slice(0, 60) : "No Description"}
                  price={element.price}
                  category={element.category}
                />
              </div>
            ))}
      </div>
    </>
  );
};

export default AllProducts;
