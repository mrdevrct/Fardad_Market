const getEnvironment = () => {
  const env = process.env.NODE_ENV || "development";
  switch (env) {
    case "development":
      return { baseUrl: "https://fardad-market.com" };
    case "production":
      return { baseUrl: "https://fardad-market.com" };
    default:
      return { baseUrl: "https://fardad-market.com" };
  }
};

export const environment = {
  api: {
    baseUrl: getEnvironment().baseUrl,
    wpBasePath: "/wp-json/custom/v1",
  },
};
