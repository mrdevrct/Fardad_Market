import { useState } from "react";

export const useProductQuantity = (initialQuantity: number = 1) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return { quantity, increaseQuantity, decreaseQuantity };
};
