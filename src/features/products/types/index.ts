/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  type: string;
  status: string;
  permalink: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  stock_status: string;
  stock_quantity: number | null;
  image: string;
  gallery_images: string[];
  categories: Category[];
  tags: string[];
  attributes: any[];
  variations: any[];
  reviews: any[];
}

export interface Pagination {
  current_page: number;
  per_page: number;
  total_pages: number;
  total_products: number;
}

export interface ProductsResponse {
  products: Product[];
  pagination: Pagination;
}
