import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRequest = async ({
  endpoint,
  method = "get",
  data = null,
  params = {},
  headers = {},
}) => {
  try {
    const response = await apiClient({
      url: endpoint,
      method: method.toLowerCase(),
      data,
      params,
      headers,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        `Failed ${method.toUpperCase()} request to ${endpoint}:`,
        error.response?.data || error.message
      );
      throw error.response?.data || error;
    }

    console.error(`Request to ${endpoint} failed:`, error);
    throw error;
  }
};

export const get = (endpoint, params = {}, headers = {}) =>
  apiRequest({ endpoint, method: "get", params, headers });
