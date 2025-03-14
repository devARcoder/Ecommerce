import React, {useState, useEffect} from 'react'
import StoreItems from './StoreItems';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    
      useEffect(() => {
        const storeProducts = async () => {
          try {
            const url = 'https://api.escuelajs.co/api/v1/products';
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data); // Fix: API returns an array directly
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        storeProducts();
      }, []);
  return (
    
    <>
    <div className="flex flex-col justify-center items-center my-6">
    <h1 className='text-5xl text-gray-900 font-extrabold font-serif'>Shop</h1>
    <h3 className='text-1xl text-gray-500 mt-4 font-extrabold font-serif'>Buy everything what you need</h3>
    </div>
      <div className="grid grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-5 px-4 mt-6">
      
      {products.map((element) => (
        <div key={element.id}>
            
          <StoreItems 
            image={element.images?.[0]} // Fix: Handle missing image
            title={element.title ? element.title.slice(0, 12) : ""}
            desc={element.description ? element.description.slice(0, 60) : ""} // Fix: Correct field name
            price={element.price}
            category={element.category} // Pass the whole category object
          />
        </div>
      ))}
    </div>
    </>
  )
}

export default AllProducts
