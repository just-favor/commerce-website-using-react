import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import CartPage from './components/pages/cartpage';
import CheckoutPage from './components/pages/Checkoutpage';
import ProductDetail from './components/pages/Productdetail';
import Toast, { ToastProvider } from './context/Toastcontext';
import Header from './components/header';
import Footer from './components/footer';

function App() {

  return (
    <>
    <ToastProvider>
     <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer/>
      </div>
     </Router>
    </ToastProvider>
    </>
  )
}

export default App
