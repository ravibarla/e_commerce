import React, { useState, useEffect } from "react";

import { Products, Navbar } from "./components";
import { commerce } from "./lib/Commerce";
/*commerce will allow us to do backend stuffs */
const App = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
