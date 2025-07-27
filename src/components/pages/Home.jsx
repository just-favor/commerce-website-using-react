import ProductCard from "../Productcard";
import { useEffect, useState, useRef } from "react";
import HeroSlider from "../heroSlider";
import "./home.css";
import Spinner from "../spinner";

function Home() {
  const [products, setProducts] = useState([]);
  const productsRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-page">
      {/* Hero Slider Section */}
      <HeroSlider />

            <h2 ref={productsRef}>Products</h2>
<div className="mid-section">

      <aside className="sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            <li
              className={selectedCategory === "all" ? "active" : ""}
              onClick={() => setSelectedCategory("all")}
              >
              All
            </li>
            {categories.map(category => (
              <li
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </aside>


      {/* Category Filter */}
      <div className="sidebar-filter-layout">
        {/* Product Grid */}
        <div className="products-section">
          {loading ? (
            <Spinner />
          ) : (
            <div className="product-grid">
              {products
                .filter(product =>
                  selectedCategory === "all" ? true : product.category === selectedCategory
                )
                .map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          )}
        </div>
      </div>
          </div>
    </div>
  );
}

export default Home;




// This Home component fetches products from a fake store API and displays them using the ProductCard component.
// It uses the useEffect hook to fetch data when the component mounts and stores the products in a state variable.
// The products are displayed in a responsive grid layout, ensuring that the cards adjust based on the screen size.
// The ProductCard component is used to render each product's image, title, and price.
// The grid layout is defined using CSS Grid, allowing for a flexible and responsive design.
// The Home component is styled with inline styles for simplicity, but you can also use CSS classes or styled-components for better organization.
// The component handles errors in fetching data by logging them to the console, which is useful for debugging.
// This component can be used as a landing page for an e-commerce application, showcasing available products to users.
// The Home component is designed to be simple and functional, focusing on displaying products effectively.