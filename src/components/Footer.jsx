import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center p-6 md:flex md:flex-row md:justify-between md:items-center">
        
    <div className='flex flex-col justify-center items-center text-center pt-3'>
          <Link to="/" className="text-5xl font-extrabold">ARS</Link>
          <p className='text-md font-bold py-12'>The best look anytime, anywhere.</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-3">
        <p className='text-xl'>For Her</p>
        <Link to="/women" className="text-sm hover:text-blue-500">Women Jeans</Link>
        <Link to="/women" className="text-sm hover:text-blue-500">Tops and Shirts</Link>
        <Link to="/women" className="text-sm hover:text-blue-500">Women Jackets</Link>
        <Link to="/women" className="text-sm hover:text-blue-500">Heels and Flats</Link>
        <Link to="/women" className="text-sm hover:text-blue-500">Women Accessories</Link>
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-3 my-9">
        <p className='text-xl'>For Him</p>
        <Link to="/men" className="text-sm hover:text-blue-500">Men Jeans</Link>
        <Link to="/men" className="text-sm hover:text-blue-500">Men Shirts</Link>
        <Link to="/men" className="text-sm hover:text-blue-500">Men Shoes</Link>
        <Link to="/men" className="text-sm hover:text-blue-500">Women Accessories</Link>
        <Link to="/women" className="text-sm hover:text-blue-500">Men Jackets</Link>
        </div>
        <div className="flex flex-col justify-center items-center text-center space-y-3">
            <p className='text-xl'>Subcribe</p>
            <input className='border border-gray-300 px-4 py-1.5 rounded' type="text" placeholder='Your email address...'/>
            <button className='text-sm bg-blue-500 text-white px-3 py-1 rounded-md'>SUBCRIBE</button>
        </div>
    </div>
    <hr/>
    <div className='text-center p-6'>
        <p className='text-sm font-semibold'>Copyright © 2025 Brandstore. Powered by devARcoder.</p>
    </div>

    </>
  )
}

export default Footer
