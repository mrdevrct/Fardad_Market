import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../types";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  isPriority?: boolean;
}

export default function ProductCard({
  product,
  isPriority = false,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => Math.max(1, prev + 1));
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="w-full lg:w-[180px] lg:h-[320px] p-[15px] shadow-md bg-white rounded-lg flex flex-col">
      {/* Image */}
      <Link
        href={`/products/${product.id}`}
        className="relative w-[140px] h-[140px] mb-2 mx-auto block"
      >
        <Image
          src={product.image}
          alt={product.name}
          className="object-cover rounded-md"
          fill
          sizes="140px"
          priority={isPriority}
          quality={75}
        />
      </Link>

      {/* Title */}
      <Link href={`/products/${product.id}`}>
        <h3 className="text-sm font-semibold text-center line-clamp-1 hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
      </Link>

      {/* Price */}
      <span className="text-blue-600 text-sm text-center my-2">
        {parseInt(product.price).toLocaleString("fa-IR")} تومان
      </span>

      {/* Quantity Selector */}
      <div className="flex items-center justify-center gap-2 my-2">
        <div className="flex items-center rounded-md bg-white overflow-hidden border border-gray-200">
          <button
            onClick={decreaseQuantity}
            className="px-3 py-1 text-lg hover:bg-gray-100 border-l border-gray-200 bg-white"
          >
            -
          </button>
          <span className="px-3 py-1 bg-white w-8 text-center text-sm">
            {quantity}
          </span>
          <button
            onClick={increaseQuantity}
            className="px-3 py-1 text-lg hover:bg-gray-100 border-r border-gray-200 bg-white"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <Button
        asChild
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Link href={`/products/${product.id}`}>افزودن به سبد خرید</Link>
      </Button>
    </div>
  );
}
