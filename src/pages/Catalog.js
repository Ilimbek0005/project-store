import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Catalog.css';


const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Если реального API пока нет — используем мок
    axios.get('http://localhost:8000/api/products')
      .then(res => setProducts(res.data))
      .catch(() => setProducts([
        { id: 1, name: 'Аккумуляторный шуруповерт 3.6 В', price: 15000, article: 'ART1',   description: 'Мощный шуруповерт для дома и работы' },
        { id: 2, name: 'Перфоратор 800 Вт', price: 18000, article: 'ART2', image: 'https://via.placeholder.com/300x200', description: 'Ударный инструмент для бетона и кирпича' },
        { id: 3, name: 'Дрель ударная', price: 12000, article: 'ART3', image: 'https://via.placeholder.com/300x200', description: 'Легкая и удобная дрель для дома' },
        { id: 4, name: 'Шлифовальная машина', price: 8000, article: 'ART4', image: 'https://via.placeholder.com/300x200', description: 'Для качественной шлифовки древесины' },
        { id: 5, name: 'Набор отверток', price: 1500, article: 'ART5', image: 'https://via.placeholder.com/300x200', description: 'Отвертки разных размеров' },
        { id: 6, name: 'Аккумуляторная дрель', price: 14000, article: 'ART6', image: 'https://via.placeholder.com/300x200', description: 'Компактная и мощная' },
        { id: 7, name: 'Пила циркулярная', price: 16000, article: 'ART7', image: 'https://via.placeholder.com/300x200', description: 'Для точной резки дерева' },
        { id: 8, name: 'Лобзик электрический', price: 11000, article: 'ART8', image: 'https://via.placeholder.com/300x200', description: 'Идеально для фигурной резки' },
        { id: 9, name: 'Угловая шлифмашина', price: 9000, article: 'ART9', image: 'https://via.placeholder.com/300x200', description: 'Мощный инструмент для металла' },
      ]));
  }, []);

  return (
    <div className="container">
      <h1 style={{color: 'black',  textAlign: 'center', margin: '40px 0' }}>Каталог</h1>
      <div className="catalog-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
