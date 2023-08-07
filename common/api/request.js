// import axios from "axios";
// import { getJWTFromLocalStorage } from "../localStorage";

// const axiosClient = axios.create({
//   headers: {
//     "Content-Type": "application/json",
//   },
//   baseURL: process.env.REACT_APP_API_URL,
//   withCredentials: true,
// });

// axiosClient.interceptors.request.use(
//   (request) => {
//     const token = getJWTFromLocalStorage();
//     if (token) {
//       request.headers.Authorization = `Bearer ${token}`;
//     }
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosClient.interceptors.response.use(
//   (response) => {
//     if (response === undefined) {
//       return Promise.reject(
//         new Error("Incorrect response format, the server might be unavailable")
//       );
//     }
//     return response.data;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       // Will handle unauthorized error later
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosClient;
