import { configureStore } from "@reduxjs/toolkit";
import reducer from "./cardSlice.ts"

const store = configureStore({
  reducer,
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
