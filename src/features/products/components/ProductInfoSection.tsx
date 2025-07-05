import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, Check } from "lucide-react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useProductQuantity } from "../hooks/useProductQuantity";

interface Category {
  name: string;
  slug: string;
}

interface ProductInfoSectionProps {
  product: {
    name: string;
    price: string;
    categories: Category[];
  };
}

export function ProductInfoSection({ product }: ProductInfoSectionProps) {
  const { quantity, increaseQuantity, decreaseQuantity } = useProductQuantity();

  return (
    <div className="w-full lg:w-[60%] flex-grow">
      <div className="text-sm text-gray-400 mb-4">
        <Link href="/" className="hover:text-gray-600">
          خانه
        </Link>
        {product.categories.map((category, index) => (
          <span key={index}>
            <span className="mx-1">/</span>
            <Link
              href={`/category/${category.slug}`}
              className="hover:text-blue-600"
            >
              {category.name}
            </Link>
          </span>
        ))}
        <span className="mx-1">/</span>
        <span className="text-gray-800">{product.name}</span>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-4 bg-white p-4 rounded-lg">
        {product.name}
      </h1>
      <div className="flex items-center mb-6 gap-3">
        <span className="text-lg text-gray-600 font-bold">قیمت :</span>
        <span className="text-2xl font-semibold text-gray-800">
          {parseInt(product.price).toLocaleString("fa-IR")} تومان
        </span>
      </div>
      <div className="flex flex-wrap justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-md bg-white overflow-hidden">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 text-lg hover:bg-gray-100 border-l border-gray-200 bg-white"
            >
              -
            </button>
            <span className="px-3 py-1 bg-white">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 text-lg hover:bg-gray-100 border-r border-gray-200 bg-white"
            >
              +
            </button>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 w-48">
            <FaShoppingCart className="h-5 w-5" />
            افزودن به سبد خرید
          </Button>
        </div>
        <div className="flex items-center w-full sm:w-auto">
          <Button
            variant="outline"
            className="flex items-center bg-white gap-2 border-none w-full sm:w-auto"
          >
            <FaRegHeart className="h-4 w-4" />
            افزودن به لیست دلخواه
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-blue-100 text-blue-500 px-4 py-2 rounded-md mb-6">
        <Eye className="h-5 w-5" />
        <span>افرادی که اکنون این محصول را تماشا می کنند: ۳۳</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
          <Check className="h-5 w-5 text-green-500" />
          <span>قیمت مناسب تمامی محصولات</span>
        </div>
        <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
          <Check className="h-5 w-5 text-green-500" />
          <span>ارسال سریع در شهر تهران</span>
        </div>
        <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
          <Check className="h-5 w-5 text-green-500" />
          <span>تضمین کیفیت مناسب محصولات</span>
        </div>
        <div className="flex items-center gap-2 bg-white p-3 rounded-lg">
          <Check className="h-5 w-5 text-green-500" />
          <span>پشتیبانی آنلاین و تلفنی</span>
        </div>
      </div>
    </div>
  );
}
