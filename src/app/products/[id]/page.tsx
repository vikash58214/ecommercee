import Navbar from "@/components/Navbar";
import Image from "next/image";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product details");
  }

  const product = await response.json();

  return (
    <>
      <Navbar />
      <section className="p-6 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            width={500}
            height={500}
            src={product.thumbnail}
            alt={product.title}
            className="rounded object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl text-gray-800 font-semibold mb-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 text-base mb-4">{product.description}</p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </section>
    </>
  );
}
