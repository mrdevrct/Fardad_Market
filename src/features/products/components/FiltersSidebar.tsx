import { Button } from "@/components/ui/button";

interface FiltersSidebarProps {
  filters: {
    category: string;
    min_price: number;
    max_price: number;
  };
  tempPriceRange: {
    min: number;
    max: number;
  };
  handlePriceChange: (type: "min" | "max", value: number) => void;
  applyPriceFilters: () => void;
  handleFilterChange: (newFilters: Partial<{ category: string }>) => void;
}

export function FiltersSidebar({
  filters,
  tempPriceRange,
  handlePriceChange,
  applyPriceFilters,
  handleFilterChange,
}: FiltersSidebarProps) {
  return (
    <div className="w-full lg:w-1/5">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-bold mb-4">فیلتر کردن</h2>

        <div className="mb-6">
          <h3 className="font-medium mb-4">محدوده قیمت (تومان)</h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">حداقل قیمت</label>
              <input
                type="number"
                min="0"
                max={tempPriceRange.max}
                step="10000"
                value={tempPriceRange.min}
                onChange={(e) => {
                  const value = Math.min(
                    Number(e.target.value) || 0,
                    tempPriceRange.max - 10000
                  );
                  handlePriceChange("min", value);
                }}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">حداکثر قیمت</label>
              <input
                type="number"
                min={tempPriceRange.min}
                max="1000000"
                step="10000"
                value={tempPriceRange.max}
                onChange={(e) => {
                  const value = Math.max(
                    Number(e.target.value) || tempPriceRange.min + 10000,
                    tempPriceRange.min + 10000
                  );
                  handlePriceChange("max", value);
                }}
                className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="1,000,000"
              />
            </div>
            <Button
              onClick={applyPriceFilters}
              className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white"
            >
              اعمال فیلتر
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        <div className="bg-white rounded-lg p-2">
          <h3 className="font-medium mb-2">دسته بندی محصولات</h3>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange({ category: e.target.value })}
            className="border p-2 rounded w-full"
          >
            <option value="">همه دسته‌ها</option>
            <option value="shoes">کفش</option>
            <option value="clothing">لباس</option>
            <option value="electronics">الکترونیک</option>
            <option value="home">خانه و آشپزخانه</option>
          </select>
        </div>
      </div>
    </div>
  );
}
