"use client";
import { useParams } from "next/navigation";
import MotionWrapper from "@/components/wrappers/MotionWrapper";
import ProductPageSkeleton from "@/features/products/components/ProductPageSkeleton";
import { useProduct } from "@/features/products/hooks/useProduct";
import { ProductImageSection } from "@/features/products/components/ProductImageSection";
import { ProductInfoSection } from "@/features/products/components/ProductInfoSection";
import { ProductDescriptionSection } from "@/features/products/components/ProductDescriptionSection";
import { ProductReviewsSection } from "@/features/products/components/ProductReviewsSection";

const productVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0 },
};

const initialReviews = [
  {
    author_name: "علی رضایی",
    author_email: "ali.rezaei@example.com",
    review: "محصول بسیار باکیفیت و عالی، ارزش خرید بالایی دارد!",
    rating: 5,
  },
  {
    author_name: "سارا محمدی",
    author_email: "sara.mohammadi@example.com",
    review: "ارسال سریع بود و محصول مطابق توضیحات بود.",
    rating: 4,
  },
];

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: product, loading, error } = useProduct(id);

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

  return (
    <MotionWrapper
      variants={productVariants}
      className="container mx-auto px-4 py-8"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        <ProductImageSection images={images} productName={product.name} />
        <ProductInfoSection product={product} />
      </div>
      <ProductDescriptionSection />
      <ProductReviewsSection initialReviews={initialReviews} />
    </MotionWrapper>
  );
}
