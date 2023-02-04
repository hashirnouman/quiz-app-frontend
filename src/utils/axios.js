import axios from "axios";
const accessToken = localStorage.getItem("token");
export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: `${accessToken}`,
  },
});
