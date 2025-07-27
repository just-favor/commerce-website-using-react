import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Cartcontext';
import './header.css';
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";

function Header() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <h1 id='home'>My-Store</h1>
      <nav className="top-nav">
        <Link to="/">Home <FaHome /></Link> \{" "}
        <Link to="/cart">Cart <FaShoppingCart /> {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}</Link> \{" "}
        <Link to="/checkout">Checkout <MdShoppingCartCheckout /></Link>
        <button>Sign in</button>
      </nav>
      <nav className="dropdown">
      <Link to="/"><FaHome className='icon' /></Link> {" "}
        <Link to="/cart"><FaShoppingCart className='icon' /> {cartCount > 0 && <span className="cart-count-badge">{cartCount}</span>}</Link> {" "}
        <Link to="/checkout"> <MdShoppingCartCheckout className='icon' /></Link>
      </nav>
    </header>
  );
}

export default Header;
