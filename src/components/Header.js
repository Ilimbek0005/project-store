import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-top">
      <div className="header-container">
        <div className="logo-section">
          <Link to="/">
            <img src="/images/logo.png" alt="Логотип ПРО ИНСТРУМЕНТ" className="logo" />
          </Link>
        </div>
        
        <nav className="main-nav">
          <Link to="/" className="nav-link">ГЛАВНАЯ</Link>
          <Link to="/catalog" className="nav-link">КАТАЛОГ</Link>
          <Link to="/about" className="nav-link">О КОМПАНИИ</Link>
          <Link to="/contacts" className="nav-link">КОНТАКТЫ</Link>
        </nav>

        <div className="contact-search">
          <span className="phone-number">8 (395) 558-68-05</span>
          <button className="search-btn">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.75 15.75L21 21M18.75 10.875C18.75 15.2248 15.2248 18.75 10.875 18.75C6.52522 18.75 3 15.2248 3 10.875C3 6.52522 6.52522 3 10.875 3C15.2248 3 18.75 6.52522 18.75 10.875Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
