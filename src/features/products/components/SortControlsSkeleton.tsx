export function SortControlsSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-col sm:flex-row justify-between items-center animate-pulse">
      {/* متن تعداد محصولات */}
      <div className="h-5 w-1/2 bg-gray-200 rounded mb-3 sm:mb-0" />
      {/* منوی مرتب‌سازی */}
      <div className="h-10 w-40 bg-gray-200 rounded" />
    </div>
  );
}
