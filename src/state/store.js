import { applyMiddleware } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

export const store = createStore(
  reducers,
  //default state is an empty object
  {},
  applyMiddleware(thunk)
);
