import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Filters {
  page: number;
  category: string;
  min_price: number;
  max_price: number;
  per_page: number;
  sort: string;
}

export function useFilters(defaultFilters: Partial<Filters> = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<Filters>({
    page: Number(searchParams.get("page")) || defaultFilters.page || 1,
    category: searchParams.get("category") || defaultFilters.category || "",
    min_price:
      Number(searchParams.get("min_price")) || defaultFilters.min_price || 0,
    max_price:
      Number(searchParams.get("max_price")) ||
      defaultFilters.max_price ||
      1000000000, // 👈 max_price updated to 1 billion
    per_page:
      Number(searchParams.get("per_page")) || defaultFilters.per_page || 10,
    sort: searchParams.get("sort") || defaultFilters.sort || "newest",
  });

  const [tempPriceRange, setTempPriceRange] = useState({
    min: filters.min_price,
    max: filters.max_price,
  });

  useEffect(() => {
    const queryParams = new URLSearchParams();

    if (filters.page !== 1) {
      queryParams.append("page", filters.page.toString());
    }

    if (filters.category) {
      queryParams.append("category", filters.category);
    }

    if (filters.min_price > 0) {
      queryParams.append("min_price", filters.min_price.toString());
    }

    if (filters.max_price < 1000000000) {
      queryParams.append("max_price", filters.max_price.toString());
    }

    if (filters.per_page !== 10) {
      queryParams.append("per_page", filters.per_page.toString());
    }

    if (filters.sort !== "newest") {
      queryParams.append("sort", filters.sort);
    }

    router.push(`/products?${queryParams.toString()}`, { scroll: false });
  }, [filters, router]);

  const handlePriceChange = (type: "min" | "max", value: number) => {
    setTempPriceRange((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const applyPriceFilters = () => {
    setFilters((prev) => ({
      ...prev,
      min_price: tempPriceRange.min,
      max_price: tempPriceRange.max,
      page: 1,
    }));
  };

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
      page: 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setFilters((prev) => ({
      ...prev,
      page,
    }));
  };

  return {
    filters,
    tempPriceRange,
    handlePriceChange,
    applyPriceFilters,
    handleFilterChange,
    handlePageChange,
  };
}
