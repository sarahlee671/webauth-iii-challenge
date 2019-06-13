import React from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';
import Login from './auth/Login';
import Users from './users/Users';
import Register from './auth/Register';

import './App.css';

function App(props) {
  function logout() {
    localStorage.removeItem('jwt')
    props.history.push('/login') //need to import withRouter and wrap App in withRouter to access history
  }

  return (
    <div className="App">
      <header>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/users">Users</NavLink>
        
        <button type="button" onClick={logout}>Logout</button>
      </header>
      <div>
        <Route path ="/register" component={Register} />
        <Route path = "/login" component={Login} />
        <Route path ="/users" component={Users} />
        
      </div>
    </div>
  );
}

export default withRouter(App);
