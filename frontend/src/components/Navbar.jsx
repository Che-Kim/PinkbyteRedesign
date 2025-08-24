import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PinkbyteLogo from '../PinkbyteLogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    if (path !== '/' && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-32 h-12 flex items-center justify-center">
              <img 
                src={PinkbyteLogo} 
                alt="PinkByte Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-32 h-12 bg-pinkbyte-600 rounded-lg flex items-center justify-center hidden">
                <span className="text-white font-bold text-2xl">PinkByte</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex space-x-12 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-pinkbyte-600'
                    : 'text-gray-600 hover:text-pinkbyte-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>



          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-pinkbyte-600 hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-pinkbyte-600'
                    : 'text-gray-600 hover:text-pinkbyte-600'
                }`}
              >
                {item.name}
              </Link>
              ))}

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
