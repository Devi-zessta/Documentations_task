const redux = require("redux");
const CounterReducer = (state = { counter: 0 }, actions) => {
  if (actions.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (actions.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

const store = redux.createStore(CounterReducer);
console.log(store.getState());

const CounterSubscriber = () => {
  const latest_data = store.getState();
  console.log(store.getState());
};

store.subscribe(CounterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
