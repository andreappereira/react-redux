import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { todo } from "./slices/todo";


export const store = configureStore({
  reducer: {
    todo,
  }
});


export type RootSate = ReturnType<typeof store.getState> 
export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector
