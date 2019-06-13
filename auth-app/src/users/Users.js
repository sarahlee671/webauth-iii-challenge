import React from 'react';
import axios from 'axios';
import User from './User';
import requiresAuth from '../auth/requiresAuth';


class Users extends React.Component {
    state = {
        users: []
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div>
                    {this.state.users.map(user => {
                        return (
                            <div className="users-container"> 
                                <User 
                                    name={user.username}
                                    id={user.id}
                                    department={user.department}
                                    key={user.id}
                                />
                            </div>
                        );
                    
                    
                      
                    })}
                </div>
            </div>
        )
    }

    componentDidMount() {
        const endpoint = 'http://localhost:5000/api/users';
        // const token = localStorage.getItem('jwt')
        // const requestConfig = {
        //     headers: {
        //         authorization: token
        //     }
        // }
        axios
            .get(endpoint)
            .then(res => {
                this.setState({users: res.data})
            })
            .catch(err => console.error(err))
    }
}

export default requiresAuth(Users);
