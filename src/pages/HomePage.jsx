import React from 'react';
import { Link } from 'react-router-dom';
import { candleProducts } from '../data/mockData';

const HomePage = () => {
  const featuredProducts = candleProducts.filter(product => product.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-candle-warm to-candle-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif-elegant font-bold text-candle-brown mb-6">
              Aura Essence
            </h1>
            <p className="text-xl md:text-2xl font-serif-body text-candle-brown/80 mb-8 max-w-3xl mx-auto">
              Illuminate your space with our handcrafted premium candles. 
              Each candle is carefully crafted to create the perfect ambiance for every moment.
            </p>
            <div className="space-x-4">
              <Link to="/products" className="btn-primary text-lg px-8 py-3">
                Shop Now
              </Link>
              <Link to="/products" className="btn-secondary text-lg px-8 py-3">
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif-elegant font-bold text-candle-brown mb-4">
              Why Choose Aura Essence?
            </h2>
            <p className="text-lg font-serif-body text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality candles with exceptional fragrances and beautiful designs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-candle-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif-elegant font-semibold text-candle-brown mb-2">Handcrafted Quality</h3>
              <p className="text-gray-600 font-serif-body">Each candle is carefully hand-poured using premium soy wax and high-quality fragrance oils.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-candle-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif-elegant font-semibold text-candle-brown mb-2">Premium Fragrances</h3>
              <p className="text-gray-600 font-serif-body">Our exclusive scent blends are designed to create the perfect atmosphere for any occasion.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-candle-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif-elegant font-semibold text-candle-brown mb-2">Long Burn Time</h3>
              <p className="text-gray-600 font-serif-body">Enjoy hours of beautiful fragrance with our candles that burn cleanly and evenly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-candle-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif-elegant font-bold text-candle-brown mb-4">
              Featured Candles
            </h2>
            <p className="text-lg font-serif-body text-gray-600 max-w-2xl mx-auto">
              Discover our most popular candle collections, carefully curated for the perfect ambiance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="card p-6 text-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x300/c3765b/ffffff?text=Candle';
                  }}
                />
                <h3 className="text-xl font-serif-elegant font-semibold text-candle-brown mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3 font-serif-body">{product.scent}</p>
                <p className="text-2xl font-serif-elegant font-bold text-candle-gold mb-4">£{product.price}</p>
                <Link 
                  to={`/products/${product.id}`}
                  className="btn-primary w-full"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary text-lg px-8 py-3">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-candle-brown text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif-elegant font-bold mb-4">
            Stay in the Glow
          </h2>
          <p className="text-xl mb-8 text-candle-cream font-serif-body">
            Subscribe to our newsletter for exclusive offers, new product launches, and candle care tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-candle-brown placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-candle-gold min-w-0"
            />
            <button className="btn-primary px-6 py-3 whitespace-nowrap">
              <i className="fas fa-envelope mr-2"></i>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
