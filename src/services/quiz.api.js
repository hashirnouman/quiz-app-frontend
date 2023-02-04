// import { AxiosInstance } from "axios";
import { axiosInstance } from "../utils/axios";
export const createQuiz = async (data) => {
  const response = await axiosInstance.post(data);
  return response;
};
export const getQuiz = async () => {
  const response = await axiosInstance.get("/get-questions");
  return response;
};

export const checkAnswer = async (data) => {
  const response = await axiosInstance.put("/check-answers", data);
  return response;
};
