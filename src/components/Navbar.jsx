import React from 'react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa'; // Import FaSearch icon
import Logo from '../assets/Logo.svg';

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div >
          <img src={Logo} alt="Logo" />
        </div>

        {/* Center Section: Menu */}
        <div className="text-white">
          <a href="#" className="text-gray-700 hover:text-white px-4 py-2">Home</a>
          <a href="#" className="text-gray-700 hover:text-white px-4 py-2">About</a>
          <a href="#" className="text-gray-700 hover:text-white px-4 py-2">Pages</a>
          <a href="#" className="text-gray-700 hover:text-white px-4 py-2">Shop</a>
          <a href="#" className="text-gray-700 hover:text-white px-4 py-2">Projects</a>
          <a href="#" className="text-gray-700 hover:text-white px-4 py-2">News</a>
        </div>

        <div className="flex items-center">
          <div className="mx-4 text-center relative"> {/* Add relative class */}
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 text-white border border-gray-100 rounded px-4 py-2 pl-10" // Adjust padding for icon
            />
            <div className="absolute inset-y-0 right-0 p-5 p-3 flex items-center pointer-events-none"> {/* Add icon container */}
              <FaSearch className="bg-gray-200" />
            </div>
          </div>

          {/* Market Icon Button */}
          <button className="bg-gray-700 text-white rounded-full h-8 w-8 flex items-center justify-center">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
