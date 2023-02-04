import { authInstance } from "../utils/auth";
export const login = async (data) => {
  const response = await authInstance.put("/login", data);
  return response;
};
