import axios from "axios";

const service = axios.create({
  baseURL: "",
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) return response;

    throw new Error(response.status.toString());
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
