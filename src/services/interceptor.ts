import { AxiosInstance } from "axios";

export const interceptor = (apiClient: AxiosInstance) => {
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        const { status, data } = error.response;
        switch (status) {
          case 400:
            console.log("Bad Request:", data.message);
            break;
          case 401:
            console.log("Unauthorized:", error.message);
            break;
          case 403:
            console.log("Forbidden:", data.message);
            break;
          case 404:
            console.log("Not Found:", data.message);
            break;
          case 500:
            console.log("Internal Server Error:", data.message);
            break;
          default:
            console.log("Error:", data.message);
        }
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error setting up request:", error.message);
      }
      return Promise.reject(error);
    }
  );
};
