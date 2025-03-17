import React, {useState, useEffect} from 'react'
import StoreItems from './StoreItems';
import { Link } from 'react-router-dom';
import seller1 from './assets/bestSeller.jpg'
import seller2 from './assets/seller2.jpg'
import seller3 from './assets/seller3.jpg'
import seller4 from './assets/seller4.jpg'
import seller5 from './assets/seller5.jpg'
const MenCloths = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchClothingProducts = async () => {
          try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
      
            // Filter only clothing products
            const filteredProducts = data.filter(
              (item) =>
                item.category === "men's clothing"
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
    <div className="bg-gray-100 py-0 px-0 flex flex-col justify-between md:py-24 md:px-10 md:flex md:flex-row md:justify-between">
      <div className="flex flex-col px-4 md:px-1 space-y-4 order-last py-6 md:py-0 md:order-first">
        <input className=' px-2 py-2 md:py-1 border border-gray-300' type="text" placeholder='Search products...'/>
        <div className="category flex flex-col">
          <h1 className='text-2xl text-gray-800'>Categories</h1>
          <Link className='text-md px-2 py-1' to="/jewelery">Jewelries <span className='text-md'>(7)</span> </Link>
          <Link className='text-md px-2 py-1' to="/men">Men <span className='text-md'>(12)</span></Link>
          <Link className='text-md px-2' to="/women">Women <span className='text-md'>(6)</span></Link>
        </div>
        <div className="flex flex-col space-y-2 ">
          <h1 className='text-2xl text-gray-800'>Our Best Sellers</h1>
          <di className="flex flex-col px-2 py-1 md:space-y-6">
            <div className="1 flex items-center space-x-2 py-1">
              <img className='w-20 h-16' src={seller1} alt="seller1" />
              <div className="flex flex-col items-start">
                <h3 className='font-bold text-sm'>Blue Denim Shorts</h3>
                <div className="flex">
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                
                </div>
                <p className='text-sm font-semibold'><span className='line-through text-gray-500'>$150.00</span> $130.00</p>
              </div>
            </div>
            <div className="1 flex items-center space-x-2 py-1">
              <img className='w-20 h-16' src={seller2} alt="seller1" />
              <div className="flex flex-col items-start">
                <h3 className='font-bold text-sm'>ARS Red Shoes</h3>
                <div className="flex">
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                
                </div>
                <p className='text-sm font-semibold'><span className='line-through text-gray-500'>$180.40</span> $150.10</p>
              </div>
            </div>
            <div className="1 flex items-center space-x-2 py-1">
              <img className='w-20 h-16' src={seller3} alt="seller1" />
              <div className="flex flex-col items-start">
                <h3 className='font-bold text-sm'>ARS Green Tshirt</h3>
                <div className="flex">
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                
                </div>
                <p className='text-sm font-semibold'><span className='line-through text-gray-500'>$40.00</span> $45.00</p>
              </div>
            </div>
            <div className="1 flex items-center space-x-2 py-1">
              <img className='w-20 h-16' src={seller4} alt="seller1" />
              <div className="flex flex-col items-start">
                <h3 className='font-bold test-sm'>ARS Yellow Shoes</h3>
                <div className="flex">
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                
                </div>
                <p className='text-sm font-semibold'><span className='line-through text-gray-500'>$190.00</span> $160.00</p>
              </div>
            </div>
            <div className="1 flex items-center space-x-2 py-1">
              <img className='w-20 h-16' src={seller5} alt="seller1" />
              <div className="flex flex-col items-start">
                <h3 className='font-bold test-sm'>ARS Yellow Shoes</h3>
                <div className="flex">
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                <span className="text-1xl text-yellow-500">&#9733;</span>
                
                </div>
                <p className='text-sm font-semibold'><span className='line-through text-gray-500'>$170.00</span> $200.00</p>
              </div>
            </div>
          </di>
        </div>
      </div>
    <div className="bg-white mx-0 md:mx-12">
    <ol className="flex items-center whitespace-nowrap py-6 mx-4">
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
              <p className="text-sm font-semibold text-gray-800 truncate cursor-pointer">Men</p>
            </li>
          </ol>
          <div className="mx-10 space-y-4 md:mx-20">
            <h1 className='text-center text-2xl md:text-5xl '>Men</h1>
            <p className='text-sm line-clamp-3  md:text-md'>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.</p>
          </div>
      <div className="grid grid-cols-2 md:grid md:grid-cols-3 justify-items-center px-4 mt-6">
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
    </div>
    </div>
    </>
  )
}

export default MenCloths
