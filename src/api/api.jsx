import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081",
});

api.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3ODQ2NDI1MzIsImV4cCI6MTc4NDY3ODUzMn0.klkH67Y2J8vhZZ-jmlP9c6cyanpsjWoFmumpqViJe7QNoEVk__Uq5yy3PqeT-sMJ7kCXKNLPnAyXVmKg_tjLxA";

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;