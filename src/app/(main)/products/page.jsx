import ProductCard from "@/Component/ProductsCard";

const ProductsPage = async () => {

  const res = await fetch("https://assignment-08-fake-server.onrender.com/products");
  const data = await res.json();

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((product , index) => (
        <ProductCard key={index} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default ProductsPage;