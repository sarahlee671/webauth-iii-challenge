import React from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requiresAuth';


class Users extends React.Component {
    state = {
        users: []
    }

    render() {
        return (
            <div>
                <h2> Our Users</h2>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        const endpoint = 'http://localhost:5000/api/users';
        const token = localStorage.getItem('jwt')
        const requestConfig = {
            headers: {
                authorization: token
            }
        }
        axios
            .get(endpoint, requestConfig)
            .then(res => {
                this.setState({users: res.data})
            })
            .catch(err => console.error(err))
    }
}

export default requiresAuth(Users);
