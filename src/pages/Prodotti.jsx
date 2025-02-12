import axios from "axios";
import "./ProductCard.css";
import { useEffect, useState } from "react";

export default function Prodotti() {
  const [products, setProducts] = useState([]);

  function fetchProducts() {
    axios.get("http://localhost:3000/foods").then((res) => {
      setProducts(res.data);
    });
  }

  useEffect(fetchProducts, []);

  return (
    <div className="product-list">
      <h1>I nostri prodotti:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-card">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-content">{product.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
