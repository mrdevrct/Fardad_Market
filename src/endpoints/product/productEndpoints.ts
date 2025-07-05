const productsEndpoints = {
  GET_PRODUCTS: { path: "/products", useWpBasePath: true },
  GET_PRODUCT_DETAILS: { path: "/product/:id", useWpBasePath: true },
};

export default productsEndpoints;