import React, {useState, useEffect} from 'react'
import StoreItems from './StoreItems';
import { Link } from 'react-router-dom';

const JeweleryProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchClothingProducts = async () => {
          try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
      
            // Filter only clothing products
            const filteredProducts = data.filter(
              (item) =>
                item.category === "jewelery"
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
    <>
    <ol className="flex items-center whitespace-nowrap my-6 mx-4">
                <li className="inline-flex items-center">
                  <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600" to="/">
                    Home
                  </Link>
                  <svg
                    className="shrink-0 mx-2 size-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </li>
                <li className="inline-flex items-center">
                  <p className="text-sm font-semibold text-gray-800 truncate cursor-pointer">Jeweleries</p>
                </li>
              </ol>
              <div className="text-center mx-10 space-y-4 md:mx-20">
                <h1 className='text-2xl md:text-5xl '>Jeweleries</h1>
                <p className='text-sm line-clamp-3  md:text-md '>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.</p>
              </div>
      <div className="grid grid-cols-2 md:grid md:grid-cols-4 justify-items-center px-4 mt-6">
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
    </>
  )
}

export default JeweleryProducts
