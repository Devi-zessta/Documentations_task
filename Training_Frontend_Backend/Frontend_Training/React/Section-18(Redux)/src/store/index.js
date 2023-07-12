/********************************Redux*****************************************/

// import { createStore } from "redux";

// const InitialState = { counter: 0, ShowCounter: true };

// const counterReducer = (state = InitialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       ShowCounter: state.ShowCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       ShowCounter: state.ShowCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       ShowCounter: state.ShowCounter,
//     };
//   }
//   if (action.type === "showcounter") {
//     return {
//       counter: state.counter,
//       ShowCounter: !state.ShowCounter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

// export default store;


/*********************************Redux toolkit*****************************************/

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './Counter';
import AuthSlice from './Auth'

const store=configureStore({
    reducer:{counter:counterSlice.reducer,Auth:AuthSlice.reducer}
})
export const counterActions=counterSlice.actions;//actions is an object with reducer methods as keys.
export const authActions=AuthSlice.actions;
export default store;
