import axios from "axios";
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
    <>
      <h1>I nostri prodotti:</h1>
      {products.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.content}</p>
          </li>
        );
      })}
    </>
  );
}
