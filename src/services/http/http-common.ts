import axios from "axios";

// Create an Axios instance
const http = axios.create({
  baseURL: "https://api.dazlpro.com/api",
  headers: {
    "Accept": "application/json",
    "Content-type": "application/json",
  },
});

// Add a request interceptor
http.interceptors.request.use(
  (config:any) => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error:any) => {
    return Promise.reject(error);
  }
);

export default http;
