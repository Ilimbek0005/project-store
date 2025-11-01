import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCartStore();
  const total = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);

  if (!cartItems.length)
    return (
      <div className="container">
        <h2>Корзина пуста</h2>
      </div>
    );

  return (
    <div className="container">
      <h2>Корзина</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Фото</th>
            <th>Товар</th>
            <th>Кол-во</th>
            <th>Цена</th>
            <th>Всего</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image || "https://via.placeholder.com/60"}
                  alt=""
                />
              </td>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, +e.target.value)}
                  style={{ width: "60px" }}
                />
              </td>
              <td>{item.price} ₽</td>
              <td>{item.price * item.quantity} ₽</td>
              <td>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ color: "red" }}
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total">Итого: {total} ₽</div>
      <Link to="/checkout">
        <button className="btn" style={{ width: "100%" }}>
          Оформить заказ
        </button>
      </Link>
    </div>
  );
};

export default Cart;
