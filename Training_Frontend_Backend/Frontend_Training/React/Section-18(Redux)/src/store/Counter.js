import { createSlice } from "@reduxjs/toolkit";
const InitialCounterState = { counter: 0, ShowCounter: true };

const counterSlice=createSlice({
  name: "counter",
  initialState: InitialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.ShowCounter = !state.ShowCounter;
    },
  },
});


export default counterSlice;