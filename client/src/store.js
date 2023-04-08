import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { allUsersReducer, userReducer } from "./Redux/Reducers/userReducer";
import { newProductReducer, productReducerDU, productsReducer } from "./Redux/Reducers/productReducer";
import { allOrdersReducer } from "./Redux/Reducers/orderReducer";
const reducer = combineReducers({
  user:userReducer,
  // {==ADMIN====}
  products: productsReducer,
  allUsers: allUsersReducer,
  allOrders: allOrdersReducer,
  newProduct:newProductReducer,
  productsDU:productReducerDU
});
let initialState = {};
const middleware = [thunk];
const store = legacy_createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
