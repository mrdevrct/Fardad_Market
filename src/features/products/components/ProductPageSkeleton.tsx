"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Section Skeleton */}
        <div className="w-full lg:w-[40%] max-w-[420px] flex gap-4 flex-shrink-0">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2 w-20 flex-shrink-0">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-md bg-gray-200 animate-pulse flex-shrink-0"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="relative w-full max-w-[400px] h-96 bg-gray-200 rounded-lg overflow-hidden animate-pulse">
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md">
              <ChevronLeft className="h-5 w-5 text-gray-400" />
            </div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md">
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Info Section Skeleton */}
        <div className="w-full lg:w-[60%] flex-grow">
          <div className="h-4 w-3/4 bg-gray-200 rounded mb-4 animate-pulse" />
          <div className="h-8 w-1/2 bg-gray-200 rounded mb-6 animate-pulse" />
          <div className="flex items-center gap-3 mb-6">
            <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="flex flex-wrap justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-10 w-48 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-10 w-full sm:w-36 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="h-6 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-12 bg-gray-200 rounded animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg mt-8 animate-pulse">
        <div className="h-6 w-32 bg-gray-300 rounded mb-4" />
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="h-5 w-24 bg-gray-300 rounded" />
            <div className="h-5 w-32 bg-gray-300 rounded" />
          </div>
          <div className="flex gap-4">
            <div className="h-5 w-24 bg-gray-300 rounded" />
            <div className="h-5 w-32 bg-gray-300 rounded" />
          </div>
          <div className="flex gap-4">
            <div className="h-5 w-24 bg-gray-300 rounded" />
            <div className="h-5 w-32 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
