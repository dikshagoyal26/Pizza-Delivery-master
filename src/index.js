import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer'
import ProfileReducer from './reducers/profileReducer';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const reducer = combineReducers(
{
	pr:ProfileReducer,
	cr:cartReducer
})

const persistedState = loadFromLocalStorage()

const store = createStore(reducer,persistedState);

store.subscribe(()=>saveToLocalStorage(store.getState()));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();