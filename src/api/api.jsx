import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",
});

api.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODQyMTczNzgsImV4cCI6MTc4NDI1MzM3OH0.HUvESDYiOIZlyafLdmjuyMiBx-axZCdxzSNGzOsFG9BFiPXnVJsmI-pNDelZmT1RGnDAiL9-gv-wbz4zKGYKJw";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;