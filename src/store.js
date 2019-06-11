import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import ProfileReducer from "./reducers/profileReducer";
import ProductReducer from "./reducers/productReducer";

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
  prod_r: ProductReducer
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
