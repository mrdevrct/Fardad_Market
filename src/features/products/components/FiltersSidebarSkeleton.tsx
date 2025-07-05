import { Button } from "@/components/ui/button";

export function FiltersSidebarSkeleton() {
  return (
    <div className="w-full lg:w-1/5">
      <div className="bg-white rounded-lg shadow p-4 animate-pulse">
        {/* عنوان "فیلتر کردن" */}
        <div className="h-6 w-1/3 bg-gray-200 rounded mb-4" />

        {/* بخش محدوده قیمت */}
        <div className="mb-6">
          <div className="h-5 w-1/4 bg-gray-200 rounded mb-4" />
          <div className="flex flex-col gap-4">
            {/* حداقل قیمت */}
            <div className="flex flex-col">
              <div className="h-4 w-1/4 bg-gray-200 rounded mb-1" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
            {/* حداکثر قیمت */}
            <div className="flex flex-col">
              <div className="h-4 w-1/4 bg-gray-200 rounded mb-1" />
              <div className="h-10 w-full bg-gray-200 rounded" />
            </div>
            {/* دکمه اعمال فیلتر */}
            <Button
              disabled
              className="h-10 w-full bg-gray-200 text-transparent rounded"
            >
              اعمال فیلتر
            </Button>
          </div>
        </div>

        {/* خط جداکننده */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* بخش دسته‌بندی */}
        <div className="bg-white rounded-lg p-2">
          <div className="h-5 w-1/3 bg-gray-200 rounded mb-2" />
          <div className="h-10 w-full bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
