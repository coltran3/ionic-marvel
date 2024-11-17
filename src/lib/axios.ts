import axios from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const configParams = config.params ? config.params : {};

  config.params = {
    ...configParams,
    apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY,
  };

  return config;
});
