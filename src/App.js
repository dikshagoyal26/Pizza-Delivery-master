import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Details from './components/Details';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Cart from './components/cart/Cart';


class App extends Component {
  render() { 
    return (
     <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={List}/>
          <Route exact path="/details/:id" component={Details}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;