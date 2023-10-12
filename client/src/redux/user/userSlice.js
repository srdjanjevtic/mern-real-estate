import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInStart: (state) => {
      state.loading = true;
    },
    logInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    LogInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { logInStart, logInSuccess, LogInFailure } = userSlice.actions;
export default userSlice.reducer;
