import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import filtersReducer from "./filtersSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    filters: filtersReducer,
  },
});
