import { createSlice } from "@reduxjs/toolkit";

const CounterInitialState = {
  counter: 0,
  email: "summa",
};
const CounterReducer = createSlice({
  name: "counterReducer",
  initialState: CounterInitialState,
  reducers: {
    updateCounter(state, action) {
      state.counter = action.payload;
    },
    updateEmail(state, action) {
      state.email = action.payload;
    },
  },
});
export const CounterReducerAction = CounterReducer.actions;
export default CounterReducer;
