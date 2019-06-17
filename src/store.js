import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import ProfileReducer from "./reducers/profileReducer";
import ProductReducer from "./reducers/productReducer";
import errorReducer from "./reducers/errorReducer";
import adminReducer from "./reducers/adminReducer";
import authReducer from "./reducers/authReducer";
import orderReducer from "./reducers/orderReducer";
import feedbackReducer from "./reducers/feedbackReducer";
import userReducer from "./reducers/userReducer";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const middleware = [thunk];

const reducer = combineReducers({
  pr: ProfileReducer,
  cr: cartReducer,
  prod_r: ProductReducer,
  er: errorReducer,
  ar: adminReducer,
  auth_r: authReducer,
  order_r: orderReducer,
  feedback_r: feedbackReducer,
  user_r: userReducer
});

const persistedState = loadFromLocalStorage();

const store = createStore(
  reducer,
  persistedState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
