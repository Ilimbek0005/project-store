import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useCartStore from "../store/useCartStore";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCartStore();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    delivery: "courier",
    payment: "cash",
  });

  const total = cartItems.reduce((s, i) => s + i.price * i.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Заказ оформлен!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="container checkout-form">
      <h2>Оформление заказа</h2>
      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
        <form onSubmit={handleSubmit} style={{ flex: 1, minWidth: "300px" }}>
          <h3>Ваши данные</h3>
          <input
            placeholder="Имя"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            placeholder="Телефон"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            placeholder="Email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            placeholder="Адрес доставки"
            required
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          <h3>Способ доставки</h3>
          <select
            value={form.delivery}
            onChange={(e) => setForm({ ...form, delivery: e.target.value })}
          >
            <option value="courier">Курьер</option>
            <option value="pickup">Самовывоз</option>
            <option value="post">Почта</option>
          </select>

          <h3>Способ оплаты</h3>
          <select
            value={form.payment}
            onChange={(e) => setForm({ ...form, payment: e.target.value })}
          >
            <option value="cash">Наличными</option>
            <option value="card">Картой</option>
            <option value="online">Онлайн</option>
          </select>

          <button
            type="submit"
            className="btn"
            style={{ width: "100%", marginTop: "20px" }}
          >
            Оформить заказ
          </button>
        </form>

        <div className="checkout-summary">
          <h3>Ваш заказ</h3>
          {cartItems.map((i) => (
            <p key={i.id}>
              {i.name} × {i.quantity} = {i.price * i.quantity} ₽
            </p>
          ))}
          <p>
            <strong>Итого: {total} ₽</strong>
          </p>
          <p>Стоимость доставки: 300 ₽</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
