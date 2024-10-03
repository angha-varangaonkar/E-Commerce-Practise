import React from 'react';
import logo from '../../assets/G2.png';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { GoSignOut } from "react-icons/go";
import { Link } from 'react-router-dom';
import Navitems from './Navitems';
import { NavData } from './data';
import { logout } from '../../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { totalQuantity } = useSelector((state) => state.cart);
  const name = localStorage.getItem('name');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="p-2 sticky top-0 z-50 bg-white border border-gray-200 shadow-lg">
      <div>
        {/* First Row */}
        <div className="flex justify-between items-center p-1 mb-4">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <img 
              src={logo} 
              className="h-16 w-16 shadow-lg rounded-full border-2 border-gray-300" 
              alt="Logo" 
            />
            <p className="text-3xl tracking-wide font-semibold">GrabGoods</p>
          </div>

          <div className="w-80 relative">
            {/* Search Input with Icon */}
            <input
              className="w-full p-2 pl-10 font-normal bg-white border border-gray-500 rounded-full focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Search"
            />
            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/profile" className="group flex items-center space-x-1 hover:text-indigo-600 transition-all duration-200">
              <AiOutlineUser className="text-xl group-hover:scale-110 transition-all duration-200" />
              <span className="text-sm font-medium group-hover:underline">
                {name ? name : 'User'}
              </span>
            </Link>

            <Link to="/cart" className="group relative flex items-center space-x-1 hover:text-indigo-600 transition-all duration-200">
              <HiOutlineShoppingBag className="text-2xl group-hover:scale-110 transition-all duration-200" />
              <span className="text-sm font-medium group-hover:underline">Cart</span>
              {totalQuantity > 0 && (
                <span className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full text-xs px-2 py-0.5">
                  {totalQuantity}
                </span>
              )}
            </Link>

            <Link onClick={handleLogOut} className="group flex items-center space-x-1 hover:text-indigo-600 transition-all duration-200">
              <GoSignOut className="text-2xl group-hover:scale-110 transition-all duration-200" />
              <span className="text-sm font-medium group-hover:underline">Log Out</span>
            </Link>
          </div>
        </div>

        {/* Second Row */}
        <div>
          <div className="flex justify-center items-center">
            <ul className="flex space-x-6">
              {NavData.map((items) => (
                <Navitems
                  key={items.text}
                  to={items.url}
                  text={items.text}
                  className="group hover:text-indigo-600 transition-all duration-200"
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
