import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state = action.payload;
    },
  },
});

export const { increment, decrement, login } = authSlice.actions;
export default authSlice.reducer;
