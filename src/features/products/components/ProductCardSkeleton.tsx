// app/components/ProductCardSkeleton.tsx
export default function ProductCardSkeleton() {
  return (
    <div className="w-full lg:h-[400px] p-[15px] shadow-md bg-white rounded-lg flex flex-col animate-pulse gap-1">
      {/* Image Placeholder */}
      <div className="relative w-full h-[200px] mb-2 mx-auto bg-gray-200 rounded-md"></div>

      {/* Title Placeholder */}
      <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>

      {/* Price Placeholder */}
      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto my-2"></div>

      {/* Quantity Selector Placeholder */}
      <div className="flex items-center justify-center gap-2 my-2">
        <div className="flex items-center rounded-md bg-gray-200 h-8 w-24"></div>
      </div>

      {/* Button Placeholder */}
      <div className="h-10 bg-gray-200 rounded w-full"></div>
    </div>
  );
}
