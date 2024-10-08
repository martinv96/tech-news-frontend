import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: false, username: "" },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
    },
    logout: (state, action) => {
      state.value.token = null;
      state.value.username = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
