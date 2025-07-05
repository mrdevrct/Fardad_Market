/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useProduct } from "@/features/products/hooks/useProduct";
import { ChevronLeft, ChevronRight, Eye, Check } from "lucide-react";
import Link from "next/link";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import MotionWrapper from "@/components/wrappers/MotionWrapper";
import ProductPageSkeleton from "@/features/products/components/ProductPageSkeleton";

const productVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0 },
};

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: product, loading, error } = useProduct(id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (loading) return <ProductPageSkeleton />;
  if (error)
    return (
      <div className="container mx-auto text-center py-16 text-red-500 text-xl">
        {error}
      </div>
    );
  if (!product)
    return (
      <div className="container mx-auto text-center py-16 text-xl">
        محصول یافت نشد
      </div>
    );

  const images = [product.image, ...product.gallery_images];
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <MotionWrapper
      variants={productVariants}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Image Section (40%) */}
        <div className="w-full lg:w-[40%] max-w-[420px] flex flex-col-reverse md:flex-row gap-4 flex-shrink-0 mx-auto">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2 w-20 flex-shrink-0">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 flex-shrink-0 ${
                  currentImageIndex === index
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  quality={50}
                />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="relative w-full max-w-[400px] h-96 bg-white rounded-lg overflow-hidden">
            <Image
              src={images[currentImageIndex]}
              alt={product.name}
              fill
              className="object-contain"
              quality={100}
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
                >
                  <ChevronRight className="h-5 w-5 text-gray-700" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Product Info Section (60%) */}
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
      </div>
      <div className="bg-white p-6 rounded-lg mt-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">توضیحات</h2>
        <div className="space-y-4">
          <div className="flex gap-4 bg-gray-100 p-2 rounded">
            <span className="text-gray-600 w-32">برند:</span>
            <span className="text-gray-800">اکتیجنت</span>
          </div>
          <div className="flex gap-4 bg-gray-100 p-2 rounded">
            <span className="text-gray-600 w-32">وزن:</span>
            <span className="text-gray-800">۳۰ گرم</span>
          </div>
          <div className="flex gap-4 bg-gray-100 p-2 rounded">
            <span className="text-gray-600 w-32">مناسب برای:</span>
            <span className="text-gray-800">بزرگسال</span>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}
