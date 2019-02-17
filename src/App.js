import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Details from './components/Details';
import {BrowserRouter,Route } from 'react-router-dom';


class App extends Component {
  render() { 
    return (
     <BrowserRouter>
      <div className="App">
        <Header/>
        <Route path="/list" component={List}/>
        <Route path="/details:id" component={Details}/>
      </div>
    </BrowserRouter>
    );
  }
}
const list = () =>(
  <List/>
);
export default App;