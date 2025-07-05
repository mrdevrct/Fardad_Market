interface Endpoint {
  path: string;
  useWpBasePath: boolean; // مشخص می‌کند که آیا از /wp-shop/v1 استفاده شود
}

const productsEndpoints = {
  GET_PRODUCTS: { path: "/products", useWpBasePath: true },
  GET_PRODUCT_DETAILS: { path: "/product/:id", useWpBasePath: true },
};

export default productsEndpoints;