import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import {BrowserRouter,Route,Link} from 'react-router-dom';


class App extends Component {
  render() { 
    return (
     <BrowserRouter>
      <div className="App">
        <Header/>
        <Route path="/list" component={list}/>
      </div>
    </BrowserRouter>
    );
  }
}
const list = () =>(
  <List/>
);
export default App;