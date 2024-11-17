import axios from "axios";
import crypto from "crypto";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const ts = new Date().getTime().toString();
    const hash = crypto
      .createHash("md5")
      .update(
        ts +
          process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY +
          process.env.NEXT_PUBLIC_MARVEL_PRIVATE_KEY
      )
      .digest("hex");

    const configParams = config.params ? config.params : {};

    config.params = {
      ...configParams,
      ts,
      hash,
      apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY,
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
