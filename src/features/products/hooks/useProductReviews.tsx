import { useState } from "react";

interface Review {
  author_name: string;
  author_email: string;
  review: string;
  rating: number;
}

export const useProductReviews = (initialReviews: Review[]) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [reviewForm, setReviewForm] = useState({
    author_name: "",
    author_email: "",
    review: "",
    rating: 0,
  });

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      reviewForm.author_name &&
      reviewForm.author_email &&
      reviewForm.review &&
      reviewForm.rating > 0
    ) {
      setReviews([...reviews, { ...reviewForm }]);
      setReviewForm({
        author_name: "",
        author_email: "",
        review: "",
        rating: 0,
      });
    }
  };

  const handleRatingChange = (rating: number) => {
    setReviewForm((prev) => ({ ...prev, rating }));
  };

  const updateReviewForm = (
    field: keyof typeof reviewForm,
    value: string | number
  ) => {
    setReviewForm((prev) => ({ ...prev, [field]: value }));
  };

  return {
    reviews,
    reviewForm,
    handleReviewSubmit,
    handleRatingChange,
    updateReviewForm,
  };
};
