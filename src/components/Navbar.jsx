import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to close sidebar
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Navbar (Fixed on Top) */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-gray-900 text-white px-4 py-2 md:py-5">
        {/* Logo */}
        <div>
          <Link to="/" className="text-5xl font-extrabold pl-4">ARS</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 pr-48 font-semibold">
          <Link to="/everything">EVERYTHING</Link>
          <Link to="/women">WOMEN</Link>
          <Link to="/men">MEN</Link>
          <Link to="/jewelery">JEWELERIES</Link>
          <Link to="/electronics">ELECTRONICS</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-6 font-bold relative">
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4 mx-4 font-semibold">
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>

          {/* Pricing Display */}
          <p>$940.35</p>

          {/* Shopping Bag */}
          <div className="relative">
            <Link to="/" className="relative">
              <i className="fa fa-shopping-bag text-xl"></i>
              <span className="absolute -top-2 -right-2 text-[10px] rounded-full bg-white text-black px-1.5 py-0">
                7
              </span>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              className="bg-black px-3 py-1"
              onClick={() => setSidebarOpen(true)}
            >
              <i className="fa fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* To prevent content from being hidden under fixed navbar */}
      <div className="h-14 md:h-20"></div>

      {/* Sidebar Overlay (Click Outside to Close) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-64 md:w-80 h-full bg-white text-black shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">devARcoder</h2>
          <button onClick={closeSidebar}>
            <i className="fa fa-times text-xl"></i>
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4 space-y-4 relative">
          {/* Sidebar Links (Clicking Closes Sidebar) */}
          <nav className="flex flex-col space-y-4 text-lg">
            <Link to="/everything" onClick={closeSidebar}>EVERYTHING</Link>
            <Link to="/women" onClick={closeSidebar}>WOMEN</Link>
            <Link to="/men" onClick={closeSidebar}>MEN</Link>
            <Link to="/jewelery" onClick={closeSidebar}>JEWELERIES</Link>
            <Link to="/electronics" onClick={closeSidebar}>ELECTRONICS</Link>
            <hr/>
            <Link to="/about" onClick={closeSidebar}>ABOUT</Link>
            <Link to="/contact" onClick={closeSidebar}>CONTACT</Link>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
