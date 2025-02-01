import axios from "axios";

// const API_BASE_URL = "https://agent-fetish-rhythm-durable.trycloudflare.com";
const API_BASE_URL = "https://679c5a2e33d316846326743c.mockapi.io/";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem("access_token");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export const productAPI = {
  getStockDetails: async () => {
    try {
      const response = await api.get("/stock_-details/product");
      //   console.log(response.data);
      return response.data;
    } catch (error) {
      throw handleAPIError(error);
    }
  },
  createProduct: async (productData) => {
    try {
      const response = await api.post("/stock_-details/product", productData);
      return response.data;
    } catch (error) {
      throw handleAPIError(error);
    }
  },
  updateProduct: async (id, productData) => {
    try {
      const response = await api.put(
        `/stock_-details/products/${id}/`,
        productData
      );
      return response.data;
    } catch (error) {
      throw handleAPIError(error);
    }
  },
  deleteProduct: async (id) => {
    try {
      const response = await api.delete(`/products/${id}/`);
      return response.data;
    } catch (error) {
      throw handleAPIError(error);
    }
  },
};

const handleAPIError = (error) => {
  const errorMessage =
    error.response?.data?.detail ||
    error.response?.data?.message ||
    "An unexpected error occurred";
  const statusCode = error.response?.status;
  return { message: errorMessage, status: statusCode };
};
