import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section 
        className="hero" 
        style={{ backgroundImage: "url('/images/fon.png')" }}
      >
        <div className="hero-content">
          <h1 className="hero-title">
            Оптово-розничная продажа<br />
            сервисное обслуживание
          </h1>
          
          <ul className="hero-features">
            <li><span className="dot">•</span> Отличное качество</li>
            <li><span className="dot">•</span> Полное гарантийное обслуживание</li>
            <li><span className="dot">•</span> Лучшая цена</li>
          </ul>
          
          <Link to="/order" className="btn order-btn">Оставить заявку</Link>
        </div>

        <img src="/images/shurupovert.png" alt="Дрель" className="hero-image" />
      </section>
      
      <div className="container">
        <h2 style={{ textAlign: 'center', margin: '40px 0' }}>Популярные товары</h2>
        {/* Здесь будут ProductCard */}
      </div>
    </>
  );
};

export default Home;
