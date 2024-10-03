// CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import Navbar from '../components/Home/Navbar';
import { addToCart, removeItems } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const taxRate = 0.18;
  const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const taxAmount = subtotal * taxRate;
  const totalWithTax = subtotal + taxAmount;

  const handleIncreaseQuantity = (id) => {
    dispatch(addToCart({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(removeItems(id));
  };

  const handleCheckout = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold mb-10 text-white text-center">
       Shopping Cart
      </h1>


        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={handleIncreaseQuantity}
                  onDecrease={handleDecreaseQuantity}
                  className="hover:shadow-lg transition-shadow duration-300"
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:sticky top-28 bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Order Summary
              </h3>
              <div className="border-t border-gray-200 pt-4 space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>Rs {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax ({(taxRate * 100).toFixed(0)}%)</span>
                  <span>Rs {taxAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-semibold text-gray-900">
                  <span>Total</span>
                  <span>Rs {totalWithTax.toFixed(2)}</span>
                </div>
              </div>
              <button
                className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg mt-6 hover:bg-red-600 transition-colors duration-300"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600">Your cart is empty.</p>
            <a href="/products" className="mt-4 inline-block text-red-500 hover:text-red-600">
              Continue Shopping
            </a>
          </div>
        )}
      </div>
      </div>
  );
};

export default Cart;
