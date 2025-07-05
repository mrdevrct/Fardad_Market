// features/products/hooks/useProducts.tsx
import { useState, useEffect, useCallback } from "react";
import api, { getApiUrl } from "@/libs/axios";
import endpoints from "@/endpoints";
import { ProductsResponse } from "../types";

interface Filters {
  page?: number;
  category?: string;
  min_price?: number;
  max_price?: number;
  per_page?: number;
}

const cache: { [key: string]: ProductsResponse } = {};

export function useProducts(filters: Filters) {
  const [data, setData] = useState<ProductsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCacheKey = useCallback(() => {
    return JSON.stringify(filters);
  }, [filters]);

  const fetchProducts = useCallback(async () => {
    const cacheKey = getCacheKey();
    if (cache[cacheKey]) {
      setData(cache[cacheKey]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const url = getApiUrl(
        endpoints.GET_PRODUCTS.path,
        endpoints.GET_PRODUCTS.useWpBasePath
      );

      const queryParams = new URLSearchParams();
      if (filters.page) queryParams.append("page", filters.page.toString());
      if (filters.category) queryParams.append("category", filters.category);
      if (filters.min_price)
        queryParams.append("min_price", filters.min_price.toString());
      if (filters.max_price)
        queryParams.append("max_price", filters.max_price.toString());
      if (filters.per_page)
        queryParams.append("per_page", filters.per_page.toString());

      const response = await api.get(`${url}?${queryParams.toString()}`);
      const result: ProductsResponse = response.data;
      cache[cacheKey] = result;
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "خطای ناشناخته");
    } finally {
      setLoading(false);
    }
  }, [getCacheKey]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { data, loading, error };
}
