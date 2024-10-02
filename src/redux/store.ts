import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice.ts";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
