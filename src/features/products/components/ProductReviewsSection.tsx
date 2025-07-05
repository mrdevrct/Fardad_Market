import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useProductReviews } from "../hooks/useProductReviews";

interface Review {
  author_name: string;
  author_email: string;
  review: string;
  rating: number;
}

interface ProductReviewsSectionProps {
  initialReviews: Review[];
}

export function ProductReviewsSection({
  initialReviews,
}: ProductReviewsSectionProps) {
  const {
    reviews,
    reviewForm,
    handleReviewSubmit,
    handleRatingChange,
    updateReviewForm,
  } = useProductReviews(initialReviews);

  return (
    <div className="bg-white p-6 rounded-lg mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">نظرات کاربران</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-gray-800">
                {review.author_name}
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
      {/* Review Submission Form */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">ثبت نظر</h3>
        <div className="space-y-4">
          <Input
            placeholder="نام شما"
            value={reviewForm.author_name}
            onChange={(e) => updateReviewForm("author_name", e.target.value)}
            className="w-full border-none bg-gray-100"
          />
          <Input
            placeholder="ایمیل شما"
            value={reviewForm.author_email}
            onChange={(e) => updateReviewForm("author_email", e.target.value)}
            className="w-full border-none bg-gray-100"
          />
          <Textarea
            placeholder="متن نظر شما"
            value={reviewForm.review}
            onChange={(e) => updateReviewForm("review", e.target.value)}
            className="w-full border-none bg-gray-100"
          />
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 cursor-pointer ${
                  i < reviewForm.rating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => handleRatingChange(i + 1)}
              />
            ))}
          </div>
          <Button
            onClick={handleReviewSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            ارسال نظر
          </Button>
        </div>
      </div>
    </div>
  );
}
