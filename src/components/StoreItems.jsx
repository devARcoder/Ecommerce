import React, { useState, useEffect } from "react";

const StoreItems = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        console.log(data)
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-container grid grid-cols-3 ">
        {products.map((product) => (
          <div key={product.id} className="product-card bg-gray-100 p-3 m-1">
            <img className="w-24 h-24" src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p className="text-sm">{product.description}</p>
            <p className="text-sm">${product.price}</p>
            <p className="text-sm">{product.createdAt
            }</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreItems;
