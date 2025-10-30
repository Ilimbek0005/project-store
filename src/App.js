import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Предполагаем, что Header находится в './components/Header', как и в вашем коде
import Header from './components/Header'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            {/* Обновленные маршруты для соответствия навигации */}
            <Route path="/about" element={<div className="container"><h2>О компании</h2><p>Текст...</p></div>} />
            <Route path="/contacts" element={<div className="container"><h2>Контакты</h2><p>8 (395) 558-68-05</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;