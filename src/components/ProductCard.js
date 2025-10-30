import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useCartStore from '../store/cartStore';

const ProductCard = ({ product }) => {
  const addToCart = useCartStore(s => s.addToCart);

  const handleAdd = () => {
    addToCart(product);
    toast.success('Добавлено в корзину!');
  };

  return (
    <div className="card">
      <img src={product.image || "https://via.placeholder.com/300x200"} alt={product.name} loading="lazy" />
      <h3>{product.name}</h3>
      <p className="price">{product.price} ₽</p>
      <div className="buttons">
        <Link to={`/product/${product.id}`} className="btn-sm" style={{ background: '#6c757d' }}>Подробнее</Link>
        <button onClick={handleAdd} className="btn-sm">В корзину</button>
      </div>
    </div>
  );
};

export default ProductCard;