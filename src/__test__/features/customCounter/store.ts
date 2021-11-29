import { configureStore } from "@reduxjs/toolkit";
// import store from "../../../utils/store";
import customCounterReducer from "./customCounterSlice";
export const store = configureStore({
  reducer: {
    customCounter: customCounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
