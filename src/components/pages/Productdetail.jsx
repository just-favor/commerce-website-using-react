import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/Cartcontext";
import "./productdetails.css";
import { useToast } from "../../context/Toastcontext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  const { addToast } = useToast();
  // Fetch product details based on the ID from the URL
  // and update the state with the product data

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <p style={{ padding: "20px" }}>Loading product...</p>;
  }

  return (
    <div className="item-details">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button
  className="add-to-cart-btn"
  onClick={() => {
    addToCart(product);
    addToast("Added to cart!", "success");
  }}
>
  Add to Cart
</button>
    </div>
  );
}

export default ProductDetail;
