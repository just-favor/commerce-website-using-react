import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cartcontext";
import { useToast } from "../context/Toastcontext";
import { FaShoppingCart } from "react-icons/fa";
import "./productcard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { addToast } = useToast();

  const handleAddToCart = (e) => {
    e.preventDefault(); // prevent link navigation when clicking the button
    addToCart(product);
    addToast(`${product.title.substring(0, 20)} added to cart!`, "success");
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="cover">
        <img src={product.image} alt={product.title} />
        <div className="details">
          <h3>{product.title.substring(0, 20)}...</h3>
          <div className="description">
            <div className="p">
              Price: <span style={{ color: 'crimson' }}>${product.price}</span>
            </div>
            <div className="c-btn">
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                <FaShoppingCart />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
