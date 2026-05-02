"use client";

import ProductCard from "@/Component/ProductsCard";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://assignment-08-fake-server.onrender.com/products");
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((product , index) => (
        <ProductCard key={index} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default ProductsPage;