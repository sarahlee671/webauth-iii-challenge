import React from 'react';
import axios from 'axios';
import User from './User';
import requiresAuth from '../auth/requiresAuth';
import styled from 'styled-components';


class Users extends React.Component {
    state = {
        users: []
    }

    render() {
        return (
            <Container>
                <h2>Users</h2>
                <CardList>
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
                </CardList>
            </Container>
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

const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;



`

const CardList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
    text-align: center; 
`
