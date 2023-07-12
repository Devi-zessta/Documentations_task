import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import productReducer from "./store/reducers/products";
import ProductsProvider from './context/Products-context';//default export

// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);
import configureProductStore from "./Hooks-store/products-store";
configureProductStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <ProductsProvider >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ProductsProvider>
);
