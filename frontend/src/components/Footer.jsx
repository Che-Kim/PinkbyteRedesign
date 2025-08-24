import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-100">
      <div className="container-custom py-16 ml-48">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="w-32 h-32 flex items-center justify-end mr-16">
              <img 
                src="/PinkbyteLogo.png" 
                alt="PinkByte Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-32 h-32 bg-pinkbyte-600 rounded-lg flex items-center justify-center hidden">
                <span className="text-white font-bold text-3xl">P</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-pinkbyte-600 transition-colors duration-200 font-medium">Home</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-pinkbyte-600 transition-colors duration-200 font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-6 tracking-wide">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-600 text-base">5160 Explorer Drive, Unit 39</p>
              <p className="text-gray-600 text-base">Mississauga, ON L4W 4T7</p>
              <p className="text-gray-600 text-base">info@pinkbyte.com</p>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
