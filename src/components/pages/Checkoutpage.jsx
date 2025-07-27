import { useContext, useState } from "react";
import { CartContext } from "../../context/Cartcontext";
import { useNavigate } from "react-router-dom";
import "./checkoutpage.css";

function CheckoutPage() {
  const { cart, setCart } = useContext(CartContext);
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate order placement
    setSubmitted(true);
    localStorage.removeItem("cart");
    setCart([]);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (submitted) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Order Placed ✅</h2>
        <p>Thank you, {form.name}! Your order has been placed successfully.</p>
        <p>You will be redirected to the home page shortly...</p>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Phone:</label><br />
            <input
              type="number"
              name="email"
              value={form.phone}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Address:</label><br />
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              rows={3}
            />
          </div>
          <h3 style={{borderBottom: '1px solid black'}}>Order Total: ${total.toFixed(2)}</h3>
          <button type="submit">
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}

export default CheckoutPage;
// This component handles the checkout process, allowing users to enter their details and place an order.