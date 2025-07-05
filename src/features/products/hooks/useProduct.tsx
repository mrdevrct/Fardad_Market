import { useState, useEffect } from "react";
import api, { getApiUrl } from "@/libs/axios";
import endpoints from "@/endpoints";
import { Product } from "../types";

export function useProduct(id: string) {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const url = getApiUrl(
          endpoints.GET_PRODUCT_DETAILS.path.replace(":id", id),
          endpoints.GET_PRODUCT_DETAILS.useWpBasePath
        );
        const response = await api.get(url);
        const result: Product = response.data;
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "خطای ناشناخته");
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  return { data, loading, error };
}
