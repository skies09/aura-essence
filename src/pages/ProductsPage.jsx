import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { candleProducts, categories } from '../data/mockData';
import { useCart } from '../context/CartContext';

// Utility function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};


const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const { addToCart } = useCart();

  const filteredProducts = candleProducts.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    // You could add a toast notification here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-candle-brown mb-4">
          Our Candle Collection
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of premium candles, each designed to create the perfect atmosphere for your space.
        </p>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-candle-gold text-white'
                  : 'bg-white text-candle-brown border border-candle-brown hover:bg-candle-cream'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-candle-brown font-medium">Sort by:</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-candle-brown rounded-lg focus:outline-none focus:ring-2 focus:ring-candle-gold"
          >
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedProducts.map((product) => (
          <div key={product.id} className="card p-6 text-center group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300/c3765b/ffffff?text=Candle';
                }}
              />
              {product.featured && (
                <div className="absolute top-2 left-2 bg-candle-gold text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
            </div>
            
            <h3 className="text-xl font-semibold text-candle-brown mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2 text-sm">{product.scent}</p>
            <p className="text-gray-500 mb-3 text-sm">{product.size} • {product.burnTime}</p>
            <p className="text-2xl font-bold text-candle-gold mb-4">£{product.price}</p>
            
            <div className="space-y-3">
              <button 
                onClick={() => handleAddToCart(product)}
                className="btn-primary w-full flex items-center justify-center space-x-2"
                disabled={!product.inStock}
              >
                <i className="fas fa-shopping-cart"></i>
                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>
              <Link 
                to={`/products/${product.id}`}
                className="btn-secondary w-full text-sm flex items-center justify-center space-x-2"
                onClick={scrollToTop}
              >
                <i className="fas fa-eye"></i>
                <span>View Details</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No products message */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No products found in this category.</p>
        </div>
      )}

      {/* Product count */}
      <div className="text-center mt-8">
        <p className="text-gray-600">
          Showing {sortedProducts.length} of {candleProducts.length} products
        </p>
      </div>
    </div>
  );
};

export default ProductsPage;
