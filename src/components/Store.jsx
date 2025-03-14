import React, { useState, useEffect } from 'react';
import StoreItems from './StoreItems';

const Store = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const storeProducts = async () => {
      
  //     try {
        
  //       const url = 'https://fakestoreapi.com/products';
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setProducts(data); // Fix: API returns an array directly
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   storeProducts();
  // }, []);

  
useEffect(() => {
  const fetchClothingProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      // Filter only clothing products
      const filteredProducts = data.filter(
        (item) =>
          item.category === "men's clothing" || item.category === "women's clothing"
        
      );


      setProducts(filteredProducts);
      console.log(filteredProducts)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  fetchClothingProducts();
}, []);
  
  
  return (
    <div className="grid grid-cols-2 md:grid md:grid-cols-5 px-4 mt-6">
      {products.map((element) => (
        <div key={element.id}>
          <StoreItems 
            image={element.image} // Fix: Handle missing image
            title={element.title ? element.title.slice(0, 12) : ""}
            desc={element.description ? element.description.slice(0, 60) : ""} // Fix: Correct field name
            price={element.price}
            category={element.category} // Pass the whole category object
          />
        </div>
      ))}
    </div>
  );
};

export default Store;



