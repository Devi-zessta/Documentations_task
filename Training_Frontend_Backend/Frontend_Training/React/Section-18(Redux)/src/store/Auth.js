import { createSlice } from "@reduxjs/toolkit";

const InitialAuthState = { IsAuth: false };
const AuthSlice = createSlice({
  name: "Authentication",
  initialState: InitialAuthState,
  reducers: {
    login(state) {
      state.IsAuth = true;
    },
    logout(state) {
      state.IsAuth = false;
    },
  },
});

export default AuthSlice;
