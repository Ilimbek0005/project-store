import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock API call
    axios.get('http://localhost:8000/api/products')
      .then((res) => setProducts(res.data))
      .catch(() => setProducts([
        { id: 1, name: 'Инструмент 1', price: 100, article: 'ART1', category: 'Tools', brand: 'BrandA' },
        { id: 2, name: 'Сантехника 2', price: 200, article: 'ART2', category: 'Plumbing', brand: 'BrandB' },
        // Add more mocks as needed
      ]));
  }, []);

  return (
    <div className="container">
      <h2>Каталог товаров</h2>
      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;