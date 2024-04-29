import axios, { AxiosError } from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT
});

axiosInstance.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error(`[API Error]: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      console.error('[API Error]: No response received');
    } else {
      console.error(`[API Error]: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
