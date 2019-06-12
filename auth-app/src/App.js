import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Login from './component/Login';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/login">Login</NavLink>
      </header>
      <div>
        <Route path = "/login" component={Login}> </Route>
      </div>
      
    </div>
  );
}

export default App;
