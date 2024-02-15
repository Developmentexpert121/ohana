"use client";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux'
import Villa from "./Villa/villa";
import ActivityLoader from "./Activity/activity";

const store = configureStore({
  reducer: {
    Villa,
    ActivityLoader
  },
  middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch 
export const useAppSelector = useSelector;

