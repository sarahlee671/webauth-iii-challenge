import React from 'react';
// import axios from 'axios';

export default function(Component) {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('jwt');
            const notLoggedIn = <h3>Please Login in to see the users</h3>

            return <div>{token ? <Component {...this.props} /> : notLoggedIn}</div>
        }
    }
}

//created a HOC that passes users through this component to authenticate