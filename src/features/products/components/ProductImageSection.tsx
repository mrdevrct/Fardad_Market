import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProductImage } from "../hooks/useProductImage";

interface ProductImageSectionProps {
  images: string[];
  productName: string;
}

export function ProductImageSection({
  images,
  productName,
}: ProductImageSectionProps) {
  const { currentImageIndex, nextImage, prevImage, selectImage } =
    useProductImage(images);

  return (
    <div className="w-full lg:w-[40%] max-w-[420px] flex flex-col-reverse md:flex-row gap-4 flex-shrink-0 mx-auto">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2 w-20 flex-shrink-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 flex-shrink-0 ${
              currentImageIndex === index
                ? "border-blue-500"
                : "border-gray-200"
            }`}
            onClick={() => selectImage(index)}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              quality={50}
            />
          </div>
        ))}
      </div>
      {/* Main Image */}
      <div className="relative w-full max-w-[400px] h-96 bg-white rounded-lg overflow-hidden">
        <Image
          src={images[currentImageIndex]}
          alt={productName}
          fill
          className="object-contain"
          quality={100}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
