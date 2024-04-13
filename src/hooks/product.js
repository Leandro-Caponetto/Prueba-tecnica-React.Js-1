/** @format */

import { useEffect, useState } from "react";

const API_PRODUCT = "https://fakestoreapi.com/products";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch(API_PRODUCT);
    const data = await response.json();
    console.log("data", data);
    setProducts(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="movies">
      {getData &&
        products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt="" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
    </main>
  );
};
