/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useProducts } from "@/features/products/hooks/useProducts";
import { Pagination } from "@/components/pagination/Pagination";
import MotionWrapper from "@/components/wrappers/MotionWrapper";
import { useFilters } from "@/features/products/hooks/useFilters";
import { FiltersSidebar } from "@/features/products/components/FiltersSidebar";
import { SortControls } from "@/features/products/components/SortControls";
import PageHeader from "@/components/page-header/PageHeader";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import ProductCardSkeleton from "@/features/products/components/ProductCardSkeleton";

const ProductCard = dynamic(
  () => import("@/features/products/components/ProductCard"),
  { ssr: false }
);

const productsVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.1 } },
  exit: { opacity: 0 },
};

export default function ProductsPage() {
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
    <MotionWrapper
      variants={productsVariants}
      className="container mx-auto py-8"
    >
      <PageHeader title="محصولات فروشگاه" />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center min-h-[600px]">
              {loading ? (
                Array.from({ length: 10 }).map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))
              ) : !data || !data.products.length ? (
                <div className="bg-white rounded-lg shadow p-8 text-center">
                  محصولی یافت نشد
                </div>
              ) : (
                <Suspense
                  fallback={Array.from({ length: 10 }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                  ))}
                >
                  {data.products.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isPriority={index < 7}
                    />
                  ))}
                </Suspense>
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
