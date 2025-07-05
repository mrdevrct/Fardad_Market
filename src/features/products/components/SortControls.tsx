interface SortControlsProps {
  filters: {
    page: number;
    per_page: number;
    sort: string;
  };
  totalProducts: number;
  onSortChange: (sort: string) => void;
}

export function SortControls({
  filters,
  totalProducts,
  onSortChange,
}: SortControlsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6 flex flex-col sm:flex-row justify-between items-center">
      <div className="text-sm text-gray-600 mb-3 sm:mb-0">
        نمایش {(filters.page - 1) * filters.per_page + 1}-
        {Math.min(filters.page * filters.per_page, totalProducts || 0)} از{" "}
        {totalProducts || 0} محصول
      </div>
      <div>
        <select
          value={filters.sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-gray-300 text-gray-600 p-2 rounded"
        >
          <option value="newest">جدیدترین</option>
          <option value="cheapest">ارزان‌ترین</option>
          <option value="most_expensive">گران‌ترین</option>
          <option value="popular">محبوب‌ترین</option>
        </select>
      </div>
    </div>
  );
}
