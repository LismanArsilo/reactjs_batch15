import { createStore } from "@reduxjs/toolkit";
import CartReducer from "../Reducer/CartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(CartReducer, composeWithDevTools());

export default store;
