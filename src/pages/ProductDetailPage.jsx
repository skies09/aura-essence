import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { candleProducts } from '../data/mockData';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = candleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-candle-brown mb-4">
            Product Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    // You could add a toast notification here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-candle-gold">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-candle-gold">Products</Link>
          <span>/</span>
          <span className="text-candle-brown">{product.name}</span>
        </div>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div>
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x500/c3765b/ffffff?text=Candle';
              }}
            />
            {product.featured && (
              <div className="absolute top-4 left-4 bg-candle-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-4 md:space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-candle-brown mb-2">
              {product.name}
            </h1>
            <p className="text-lg md:text-xl text-candle-gold font-semibold mb-4">
              £{product.price}
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              {product.description}
            </p>
          </div>

          {/* Product Specifications */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span className="font-semibold text-candle-brown text-sm md:text-base">Scent:</span>
              <span className="text-gray-600 text-sm md:text-base">{product.scent}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span className="font-semibold text-candle-brown text-sm md:text-base">Size:</span>
              <span className="text-gray-600 text-sm md:text-base">{product.size}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span className="font-semibold text-candle-brown text-sm md:text-base">Burn Time:</span>
              <span className="text-gray-600 text-sm md:text-base">{product.burnTime}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span className="font-semibold text-candle-brown text-sm md:text-base">Category:</span>
              <span className="text-gray-600 text-sm md:text-base">{product.category}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
              <span className="font-semibold text-candle-brown text-sm md:text-base">Availability:</span>
              <span className={`font-semibold text-sm md:text-base ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-4">
            <button 
              onClick={handleAddToCart}
              className="btn-primary w-full text-base md:text-lg py-3"
              disabled={!product.inStock}
            >
              <i className="fas fa-shopping-cart mr-2"></i>
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/products" 
                className="btn-secondary flex-1 text-center py-2 md:py-3"
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Back to Products
              </Link>
              <Link 
                to="/cart" 
                className="btn-primary flex-1 text-center py-2 md:py-3"
              >
                <i className="fas fa-shopping-bag mr-2"></i>
                View Cart
              </Link>
            </div>
          </div>

          {/* Product Features */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-serif font-bold text-candle-brown mb-4">
              Product Features
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Hand-poured with premium soy wax</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>High-quality fragrance oils</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Clean, even burn</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Eco-friendly packaging</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-candle-brown mb-8 text-center">
          You Might Also Like
        </h2>
        {(() => {
          const relatedProducts = candleProducts
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4);
          
          // If no products in same category, show other products
          const displayProducts = relatedProducts.length > 0 
            ? relatedProducts 
            : candleProducts.filter(p => p.id !== product.id).slice(0, 4);
          
          
          if (displayProducts.length === 0) {
            return (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">No related products found.</p>
                <Link to="/products" className="btn-primary">
                  View All Products
                </Link>
              </div>
            );
          }
          
          return (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {displayProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="card p-3 md:p-4 text-center group">
                  <Link to={`/products/${relatedProduct.id}`}>
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-2 md:mb-3 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x300/c3765b/ffffff?text=Candle';
                      }}
                    />
                    <h3 className="font-semibold text-candle-brown mb-1 text-sm md:text-base">{relatedProduct.name}</h3>
                    <p className="text-candle-gold font-bold text-sm md:text-base">£{relatedProduct.price}</p>
                  </Link>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default ProductDetailPage;
