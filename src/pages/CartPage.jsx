import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-24 h-24 bg-candle-cream rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-shopping-cart text-4xl text-candle-brown"></i>
          </div>
          <h1 className="text-3xl font-serif font-bold text-candle-brown mb-4">Your Cart is Empty</h1>
          <p className="text-lg text-gray-600 mb-8">Looks like you haven't added any candles to your cart yet.</p>
          <Link to="/products" className="btn-primary text-lg px-8 py-3">
            <i className="fas fa-shopping-bag mr-2"></i>
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-candle-brown">
          Shopping Cart
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="card p-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-candle-brown mb-1">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.scent}</p>
                    <p className="text-lg font-bold text-candle-gold">£{item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200"
                        disabled={item.quantity <= 1}
                      >
                        <i className="fas fa-minus text-sm"></i>
                      </button>
                      <span className="px-4 py-2 font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-2 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <i className="fas fa-plus text-sm"></i>
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-black hover:text-gray-700 p-2"
                      title="Remove item"
                    >
                      <i className="fas fa-trash text-lg"></i>
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">£{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h2 className="text-2xl font-serif font-bold text-candle-brown mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Items ({getTotalItems()})</span>
                <span>£{getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>£{(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-candle-gold">£{(getTotalPrice() * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Link 
                to="/checkout" 
                className="btn-primary w-full text-center block"
              >
                Proceed to Checkout
              </Link>
              <Link 
                to="/products" 
                className="btn-secondary w-full text-center block"
              >
                Continue Shopping
              </Link>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <i className="fas fa-check text-green-600"></i>
                <span>Free shipping on orders over £40</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
                <i className="fas fa-check text-green-600"></i>
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
