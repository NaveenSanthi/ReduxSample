import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./CounterReducer";

const Store = configureStore({
  reducer: {
    counterReducer: CounterReducer.reducer,
  },
});
export default Store;
