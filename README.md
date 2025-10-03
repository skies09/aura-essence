# Aura Essence - Candle Shop Website

A beautiful, modern candle shop website built with React, Vite, and Tailwind CSS.

## Features

- **Homepage**: Hero section, featured products, and company information
- **Products Page**: Product grid with filtering and sorting capabilities
- **Shopping Cart**: Add/remove items, quantity management, and cart persistence
- **Checkout Page**: Complete checkout form with order summary
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Beautiful design with custom candle-themed color palette

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Context API** - State management for cart

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable components
│   └── Navigation.jsx   # Main navigation component
├── context/            # React Context for state management
│   └── CartContext.jsx # Cart state management
├── data/               # Mock data and constants
│   └── mockData.js     # Product data and categories
├── pages/              # Page components
│   ├── HomePage.jsx    # Homepage
│   ├── ProductsPage.jsx # Products listing
│   ├── CartPage.jsx    # Shopping cart
│   └── CheckoutPage.jsx # Checkout form
├── App.jsx             # Main app component with routing
├── main.jsx            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Features Overview

### Homepage
- Hero section with call-to-action buttons
- Company features and benefits
- Featured products showcase
- Newsletter signup section

### Products Page
- Product grid with images and details
- Category filtering (All, Relaxation, Fresh, Spicy, etc.)
- Price sorting (Low to High, High to Low, Name)
- Add to cart functionality
- Product details and specifications

### Shopping Cart
- View all cart items
- Update quantities
- Remove items
- Order summary with tax calculation
- Free shipping indicator
- Proceed to checkout

### Checkout Page
- Contact information form
- Shipping address form
- Payment information form
- Order summary sidebar
- Form validation
- Secure checkout simulation

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- `candle-gold`: #D4AF37
- `candle-cream`: #F5F5DC
- `candle-brown`: #8B4513
- `candle-warm`: #FFE4B5

### Products
Edit `src/data/mockData.js` to modify products, categories, or add new items.

### Styling
Custom CSS classes are defined in `src/index.css` for consistent button and card styling.

## Future Enhancements

- Product detail pages
- User authentication
- Order history
- Product reviews and ratings
- Wishlist functionality
- Payment integration
- Admin dashboard
- Inventory management

## License

This project is for educational and demonstration purposes.
