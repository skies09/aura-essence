import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const { getTotalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-candle-gold rounded-full flex items-center justify-center">
                <i className="fas fa-fire text-white text-sm"></i>
              </div>
              <span className="text-2xl font-serif font-bold text-candle-brown">Aura Essence</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-candle-brown hover:text-candle-gold transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>
            <Link 
              to="/products" 
              className="text-candle-brown hover:text-candle-gold transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <i className="fas fa-box"></i>
              <span>Products</span>
            </Link>
            <Link 
              to="/cart" 
              className="relative text-candle-brown hover:text-candle-gold transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <i className="fas fa-shopping-cart"></i>
              <span>Cart</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-candle-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative text-candle-brown hover:text-candle-gold transition-colors duration-200"
              onClick={handleLinkClick}
            >
              <i className="fas fa-shopping-cart text-xl"></i>
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-candle-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-candle-brown hover:text-candle-gold transition-colors duration-200"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className="block px-3 py-2 text-candle-brown hover:text-candle-gold hover:bg-candle-cream rounded-md text-base font-medium"
                onClick={handleLinkClick}
              >
                <i className="fas fa-home mr-2"></i>
                Home
              </Link>
              <Link 
                to="/products" 
                className="block px-3 py-2 text-candle-brown hover:text-candle-gold hover:bg-candle-cream rounded-md text-base font-medium"
                onClick={handleLinkClick}
              >
                <i className="fas fa-box mr-2"></i>
                Products
              </Link>
              <Link 
                to="/cart" 
                className="block px-3 py-2 text-candle-brown hover:text-candle-gold hover:bg-candle-cream rounded-md text-base font-medium"
                onClick={handleLinkClick}
              >
                <i className="fas fa-shopping-cart mr-2"></i>
                Cart {getTotalItems() > 0 && `(${getTotalItems()})`}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
