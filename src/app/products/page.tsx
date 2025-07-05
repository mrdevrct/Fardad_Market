"use client";
import { Suspense } from "react";
import { useProducts } from "@/features/products/hooks/useProducts";
import { Pagination } from "@/components/pagination/Pagination";
import MotionWrapper from "@/components/wrappers/MotionWrapper";
import { useFilters } from "@/features/products/hooks/useFilters";
import { FiltersSidebar } from "@/features/products/components/FiltersSidebar";
import { SortControls } from "@/features/products/components/SortControls";
import PageHeader from "@/components/page-header/PageHeader";
import dynamic from "next/dynamic";
import ProductCardSkeleton from "@/features/products/components/ProductCardSkeleton";
import { FiltersSidebarSkeleton } from "@/features/products/components/FiltersSidebarSkeleton";
import { SortControlsSkeleton } from "@/features/products/components/SortControlsSkeleton";

// Dynamic import for ProductCard
const ProductCard = dynamic(
  () => import("@/features/products/components/ProductCard")
);

// Page animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

// Product card animation variants
const productVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1, // Stagger effect for each card
      ease: "easeOut",
    },
  }),
  exit: { opacity: 0, y: 50, transition: { duration: 0.3, ease: "easeIn" } }, // Added exit for consistency
};

function ProductsContent() {
  const {
    filters,
    tempPriceRange,
    handlePriceChange,
    applyPriceFilters,
    handleFilterChange,
    handlePageChange,
  } = useFilters();
  const { data, loading, error } = useProducts(filters);

  return (
    <MotionWrapper variants={pageVariants} className="container mx-auto py-8">
      <PageHeader title="محصولات فروشگاه" pageLink="/products" />
      <div className="flex flex-col lg:flex-row gap-6">
        <FiltersSidebar
          filters={filters}
          tempPriceRange={tempPriceRange}
          handlePriceChange={handlePriceChange}
          applyPriceFilters={applyPriceFilters}
          handleFilterChange={handleFilterChange}
        />
        <div className="w-full lg:w-4/5">
          <SortControls
            filters={filters}
            totalProducts={data?.pagination?.total_products || 0}
            onSortChange={(sort) => handleFilterChange({ sort })}
          />
          {error ? (
            <div className="bg-white rounded-lg shadow p-8 text-center text-red-500">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center min-h-[600px]">
              {loading ? (
                Array.from({ length: 10 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))
              ) : !data || !data.products.length ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  محصولی یافت نشد
                </div>
              ) : (
                data.products.map((product, index) => (
                  <MotionWrapper
                    key={product.id}
                    variants={productVariants}
                    custom={index} // Pass index for staggered animation
                  >
                    <ProductCard product={product} isPriority={index < 10} />
                  </MotionWrapper>
                ))
              )}
            </div>
          )}
          {data && data.pagination && data.pagination.total_pages > 1 && (
            <div className="mt-8">
              <Pagination
                currentPage={filters.page}
                totalPages={data.pagination.total_pages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
    </MotionWrapper>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto py-8">
          <PageHeader title="محصولات فروشگاه" pageLink="/products" />
          <div className="flex flex-col lg:flex-row gap-6">
            <FiltersSidebarSkeleton />
            <div className="w-full lg:w-4/5">
              <SortControlsSkeleton />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center min-h-[600px]">
                {Array.from({ length: 10 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
