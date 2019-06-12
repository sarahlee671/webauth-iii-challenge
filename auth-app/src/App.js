import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Login from './auth/Login';
import Users from './users/Users';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/users">Users</NavLink>
      </header>
      <div>
        <Route path = "/login" component={Login} />
        <Route path ="/users" component={Users} />
      </div>
      
    </div>
  );
}

export default App;
