import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Details} path='/details/:id' />
          </Switch>  
        </HashRouter>
      </div>
    );
  }
}

export default App;
