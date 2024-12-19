import Link from "next/link";
import Image from "next/image";
interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

export default function ProductCard({
  id,
  title,
  price,
  thumbnail,
}: ProductCardProps) {
  return (
    <div className="border rounded shadow-sm p-4 hover:shadow-lg">
      <Image
        width={300}
        height={300}
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-500">${price}</p>
      <Link href={`/products/${id}`}>
        <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
}
