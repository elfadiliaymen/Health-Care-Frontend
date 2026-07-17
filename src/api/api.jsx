import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",
});

api.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODQyNzkxNzUsImV4cCI6MTc4NDMxNTE3NX0.eUTYK25Pvw0w19zq-Pgv8tAP3DLarELF_fhst6KG5tKvIUWJkD3Jfm2cM9W5VLCTrJC9TAtiEpOhjKo7OF8gtw";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;