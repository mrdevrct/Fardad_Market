import axios from "axios";
import { environment } from "@/configs/environment";

const api = axios.create({
  baseURL: environment.api.baseUrl,
});

export const getApiUrl = (endpoint: string, useWpBasePath: boolean = false) => {
  const basePath = useWpBasePath ? environment.api.wpBasePath : "";
  return `${environment.api.baseUrl}${basePath}${endpoint}`;
};

export default api;