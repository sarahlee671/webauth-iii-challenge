import React from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
import Login from './auth/Login';
import Users from './users/Users';
import Register from './auth/Register';
import styled from 'styled-components';

import './App.css';

function App(props) {
  function logout() {
    localStorage.removeItem('jwt')
    props.history.push('/login') //need to import withRouter and wrap App in withRouter to access history
  }

  return (
    <div className="App">
      <NavHeader>
        <Link className="nav-link" to="/register">Signup</Link>
        <Link className="nav-link" to="/login">Login</Link>
        <Link className="nav-link" to="/users">Users</Link>
        
        <button className="nav-button" type="button" onClick={logout}>Logout</button>
      </NavHeader>
      <div>
        <Route path ="/register" component={Register} />
        <Route path = "/login" component={Login} />
        <Route path ="/users" component={Users} />
        
      </div>
    </div>
  );
}

export default withRouter(App);

const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  Link{
    font-size: 20px;
  }
  
 
  
`