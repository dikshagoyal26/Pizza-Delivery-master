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
import cartReducer from './components/reducer'
import ProfileReducer from './reducers/profileReducer';

const reducer = combineReducers(
{
	ProfileReducer,
	cartReducer
})

const store = createStore(ProfileReducer);

//store.subscribe(()=>{console.log("[Subscription]", store.getState())});

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();