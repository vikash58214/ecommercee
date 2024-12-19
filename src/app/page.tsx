"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function ProductListingPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products || []);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const showMoreProducts = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <section className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.slice(0, visibleCount).map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
        {visibleCount < products.length && (
          <div className="text-center mt-6">
            <button
              onClick={showMoreProducts}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Show More
            </button>
          </div>
        )}
        {loading && <p className="text-center mt-4">Loading...</p>}
      </section>
    </>
  );
}
