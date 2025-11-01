import React from 'react';
import { Link } from 'react-router-dom';
import Catalog from './Catalog';
import AboutCompanyPhotos from '../components/AboutCompanyPhotos';

const Home = () => {
  return (
    <>
      {/* === HERO SECTION (остаётся без изменений) === */}
      <section className="hero" style={{ backgroundImage: "url('/images/fon.png')" }}>
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
        <Catalog />
      </div>

      {/* === ABOUT COMPANY SECTION — КАК НА КАРТИНКЕ === */}
      <section
        style={{
          backgroundColor: '#0077c8',
          color: 'white',
          padding: '80px 40px',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '60px',
          position: 'relative',
        }}
      >
        {/* === ЛЕВАЯ ЧАСТЬ: ТЕКСТ === */}
        <div style={{ flex: 1, maxWidth: '600px' }}>
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '40px',
              textTransform: 'uppercase',
            }}
          >
            О КОМПАНИИ
          </h1>

          <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '20px' }}>
            Являемся официальным представителем бренда <strong>Fixtec</strong>.
          </p>

          <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '20px' }}>
            В нашем ассортименте представлены:
          </p>

          <ul
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
              paddingLeft: '20px',
              marginBottom: '25px',
            }}
          >
            <li>Строительные инструменты высокого качества по выгодным ценам</li>
            <li>Расходные материалы для профессионального использования</li>
            <li>Садовый инвентарь для ухода за приусадебным участком</li>
            <li>Садово-огородные инструменты для работы с растениями</li>
          </ul>

          <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '20px' }}>
            Мы предлагаем широкий выбор профессионального оборудования для строительства и ремонта, а также полный комплект инструментов для садоводства. Все товары соответствуют высоким стандартам качества и доступны по конкурентным ценам.
          </p>

          <p style={{ fontSize: '18px', lineHeight: '1.7' }}>
            В нашем каталоге вы найдете как базовые инструменты, так и специализированное оборудование для различных видов работ. Мы гарантируем подлинность всей продукции и предоставляем полный комплект сопроводительных документов.
          </p>
        </div>

        {/* === ПРАВАЯ ЧАСТЬ: СЛАЙДЕР С КНОПКАМИ === */}
        <div
          style={{
            flex: 1,
            maxWidth: '500px',
            position: 'relative',
          }}
        >
          {/* Сам слайдер */}
          <div
            style={{
              border: '8px solid white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
          >
            <AboutCompanyPhotos />
          </div>
        </div>

        {/* === КНОПКИ НАВИГАЦИИ — ВНЕ СЛАЙДЕРА, НО ПРИВЯЗАНЫ К НЕМУ === */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            display: 'flex',
            gap: '15px',
            zIndex: 10,
          }}
        >
          {/* Кнопки будут управляться из AboutCompanyPhotos */}
          {/* Мы передадим функции через контекст или пропсы */}
        </div>
      </section>
    </>
  );
};

export default Home;