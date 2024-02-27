import axios from "axios";

// Test api URL
const baseURL = process.env.BASE_API_URL;

const axiosInstance = axios.create({
  baseURL,
});

const TOKEN = "CK16S2hP8MMyKBjBPtX12qSpKAyzjniaLLDAfXxF";

axiosInstance.interceptors.request.use((request: any) => {
  const { url } = request;
  const authorization = {
    Authorization: `Bearer ${TOKEN}`,
  };
  request.headers = {
    ...request.headers,
    // ...authorization,
  };
  return request;
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  ({ response }: any) => {
    const { status } = response || {};
    if (status === 401 || status === 403) {
      console.log("not auth");
    }
    return Promise.reject(response);
  }
);

export default axiosInstance;
