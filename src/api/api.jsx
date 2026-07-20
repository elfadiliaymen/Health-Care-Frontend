import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",
});

api.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODQ1Mzc5NDIsImV4cCI6MTc4NDU3Mzk0Mn0.ZhYBOV4SeFOggyb8WYQXemlIEjx9nbJRx1_gRH_9kOPUN8eOzEdDISSrX93FWekToKQT06H2qTQ-N3wZ3epJfA";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;