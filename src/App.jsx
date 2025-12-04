import React, { useState } from 'react';
import { CartProvider } from './context/CartContext.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import { products } from './data/products.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <CartProvider>
      <div className="d-flex flex-column min-vh-100">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
        
        <main className="flex-grow-1">
          {currentPage === 'home' && (
            <HomePage 
              setCurrentPage={setCurrentPage} 
              setSelectedProduct={setSelectedProduct} 
            />
          )}
          {currentPage === 'catalog' && (
            <CatalogPage 
              setCurrentPage={setCurrentPage} 
              setSelectedProduct={setSelectedProduct} 
            />
          )}
          {currentPage === 'product' && (
            <ProductPage 
              product={selectedProduct} 
              setCurrentPage={setCurrentPage} 
            />
          )}
          {currentPage === 'cart' && (
            <CartPage setCurrentPage={setCurrentPage} />
          )}
          {currentPage === 'about' && (
            <AboutPage />
          )}
          {currentPage === 'contact' && (
            <ContactPage setCurrentPage={setCurrentPage} />
          )}
          {currentPage === 'login' && (
            <LoginPage setCurrentPage={setCurrentPage} />
          )}
          {currentPage === 'signup' && (
            <SignUpPage setCurrentPage={setCurrentPage} />
          )}
        </main>

        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </CartProvider>
  );
}

export default App;