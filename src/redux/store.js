import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";

const store = createStore(
  shoppingCartReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
