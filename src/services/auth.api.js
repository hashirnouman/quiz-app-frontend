import { authInstance } from "../utils/auth";
import { login } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
const dispatch = useDispatch();
export const login = async (data) => {
  const response = await authInstance.put("/login", data);
  if (response.status === 200) {
    dispatch(response.data.accessToken);
  }
};
