import React from 'react';
import './App.css';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path = "/" exact component = {Home}></Route>
          <Route path = "/about" component = {About}></Route>
          <Route path = "/contact" component = {Contact}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
