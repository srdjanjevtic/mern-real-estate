import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
// import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware({ serializableCheck: false }),
});
