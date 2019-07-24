import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import ProductReducer from "./reducers/productReducer";
import errorReducer from "./reducers/errorReducer";
import adminReducer from "./reducers/adminReducer";
import authReducer from "./reducers/authReducer";
import orderReducer from "./reducers/orderReducer";
import feedbackReducer from "./reducers/feedbackReducer";
import userReducer from "./reducers/userReducer";
import salesReducer from "./reducers/salesReducer";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log("Error" + e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const middleware = [thunk];

const reducer = combineReducers({
  cr: cartReducer,
  prod_r: ProductReducer,
  er: errorReducer,
  ar: adminReducer,
  auth_r: authReducer,
  order_r: orderReducer,
  feedback_r: feedbackReducer,
  user_r: userReducer,
  sales_r: salesReducer,
  error_r: errorReducer
});

// const rootReducer = (state, action) => {
//   if (action.type === "LOGOUT") {
//     sessionStorage.removeItem("state");
//     state = undefined;
//   }
//   return reducer(state, action);
// };

const persistedState = loadFromLocalStorage();

const store = createStore(
  reducer,
  persistedState,
  compose(applyMiddleware(...middleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
