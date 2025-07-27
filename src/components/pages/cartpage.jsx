import { useContext } from "react";
import { CartContext } from "../../context/Cartcontext";
import { Link } from "react-router-dom";
import "./cartpage.css"

function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go shopping</Link></p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.title}</h3>
              <p>Price: <span style={{color: 'blue'}}>${item.price}</span></p>
              <p>
                Quantity: 
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to="/checkout">
            <button>
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartPage;
