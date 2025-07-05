export function ProductDescriptionSection() {
  return (
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
  );
}
