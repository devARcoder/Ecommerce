import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <header className="flex justify-between items-center bg-[#1f6583] text-white px-4 py-2 md:py-5">
        <div className="">
            <Link to="/" className='text-5xl font-extrabold pl-4'>ARS</Link>
        </div>
        <nav className="hidden md:flex space-x-6 pr-96 font-semibold">
            <Link to="/everything">EVERYTHING</Link>
            <Link to="/">WOMEN</Link>
            <Link to="/">WOMEN</Link>
            <Link to="/">ACCESSORIES</Link>
        </nav>
        <div className="flex space-x-6 items-center font-bold">
            <div className="hidden md:flex space-x-4 mx-4 font-semibold">
                <Link to="/">ABOUT</Link>
                <Link to="/">CONTACT</Link>
            </div>
            <p>$940.35</p>
            <div className='realtive'>
                <Link to="/" className='bsolute text-md'><i className="fa fa-shopping-bag text-xl"></i> <span className='absolute top-4 md:top-7 -ml-2 text-[9px] rounded-full bg-white text-black px-1.5 py-0'>0</span></Link>
                
            </div>
            <div className='md:hidden'>
                <p className='bg-black px-3 py-1'><i class="fa fa-bars text-2xl"></i></p>
            </div>
        </div>
    </header>
    </>
  )
}

export default Navbar
