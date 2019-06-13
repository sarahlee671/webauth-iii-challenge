import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    render() {
        return (
            <FormContainer>
                <h2>Login</h2>
                <Form onSubmit={this.submitForm}>
                    <div>
                        <label htmlFor="username" />
                        <input
                            id="username"
                            placeholder="username"
                            onChange={this.handleChange}
                            value={this.state.username}
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" />
                        <input
                            id="password"
                            placeholder="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            type="password"
                        />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>

                </Form>
            </FormContainer>
        )
    }

    handleChange = event => {
        const {id, value} = event.target;

        this.setState({ [id]: value });
    };

    submitForm = event => {
        event.preventDefault();
        const endpoint = 'http://localhost:5000/api/auth/login';

        axios
            .post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('jwt', res.data.token)
                console.log(res.data)
                this.props.history.push('/users')
            })
            .catch(err => {
                console.error('Login Error', err)
            })
    }
}

export default Login;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 800px;
  width: 400px;
  margin: auto;
  p {
    text-align: center;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  input {
    width: 380px;
    height: 50px;
    margin: 10px 0;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 18px;
    outline: none;
  }
  button {
    width: 380px;
    height: 50px;
    padding: 12px 0;
    font-family: inherit;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    background-color: #e5195f;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, 5px);
    }
  }
`