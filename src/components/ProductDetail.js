import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useCartStore from '../store/cartStore';

const ProductDetail = () => {
  const { id } = useParams();
  const addToCart = useCartStore(s => s.addToCart);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Mock — замени на axios.get(`/api/products/${id}`)
    const mock = {
      id, name: 'Аккумуляторный шуруповерт 3.6 В', price: 15000, article: 'ART-001', brand: 'FIXTEC',
      image: 'https://via.placeholder.com/400', description: 'Мощный аккумуляторный шуруповерт...',
      specs: { 'Напряжение': '3.6 В', 'Емкость': '1300 мАч', 'Скорость': '180 об/мин' }
    };
    setProduct(mock);
  }, [id]);

  if (!product) return <div>Загрузка...</div>;

  return (
    <div className="container product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p><strong>Артикул:</strong> {product.article}</p>
        <p className="price" style={{ fontSize: '1.8em' }}>{product.price} ₽</p>
        <button onClick={() => { addToCart(product); toast.success('Добавлено!'); }} className="btn" style={{ width: '100%', padding: '15px' }}>
          В корзину
        </button>
        <div className="specs">
          <h3>Технические характеристики</h3>
          <table>
            {Object.entries(product.specs).map(([k, v]) => (
              <tr key={k}><td>{k}</td><td>{v}</td></tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;