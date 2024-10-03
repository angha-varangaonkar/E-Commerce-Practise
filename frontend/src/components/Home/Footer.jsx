import React from 'react';
import footerColumns from './footerData';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 bg-opacity-80 text-white py-12 shadow-lg backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-between items-start">
          {/* Social Media Section */}
          <div className="text-center m-8">
            <h1 className="text-3xl font-bold mb-6 tracking-wide text-gray-100">Connect With Us</h1>
            <div className="flex justify-center gap-8 mb-8">
              <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
                <FaInstagram size={30} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
                <FaFacebook size={30} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <FaTwitter size={30} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerColumns.map((item, index) => (
            <div key={index} className="m-8 text-left">
              <h1 className="text-xl font-semibold mb-4 text-gray-200">{item.title}</h1>
              <ul>
                {item.links.map((column, idx) => (
                  <li key={idx} className="mb-2">
                    <Link className="hover:text-gray-400 transition-all duration-200 hover:underline" to={column.url}>
                      {column.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2024 GrabGoods. All rights reserved.</p>
          <div className="flex justify-center mt-4">
            <div className="h-1 w-16 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
