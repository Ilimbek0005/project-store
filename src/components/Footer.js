import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <img src="/images/logo.png" alt="Logo" style={{ marginBottom: '10px' }} />
          <p>© 2025 ПроИнструмент. Все права защищены.</p>
        </div>
        <nav>
          <Link to="/">Главная</Link> | <Link to="/catalog">Каталог</Link> | <Link to="/about">О компании</Link> | <Link to="/contact">Контакты</Link>
        </nav>
        <div>
          <p>8 (3955) 58-68-05</p>
          <p>proinstrument38@mail.ru</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;