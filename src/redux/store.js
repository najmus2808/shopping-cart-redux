import { createStore } from "redux";
import shoppingCartReducer from "./shoppingCart/shoppingCartReducer";


const store = createStore(shoppingCartReducer);

export default store;