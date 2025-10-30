import React from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';

const Navbar = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav style={{ backgroundColor: '#007bff', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', gap: '20px' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Главная</Link></li>
        <li><Link to="/catalog" style={{ color: 'white', textDecoration: 'none' }}>Каталог</Link></li>
        <li><Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Корзина ({cartCount})</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;