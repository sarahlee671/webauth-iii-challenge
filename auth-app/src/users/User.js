import React from 'react';
import '../App.css';
import styled from 'styled-components';

const User = props => {
  return (
    <Card className="user-card">
      <h3>id: {props.id}</h3>
      <h3>username: {props.name}</h3>
      <h3>department: {props.department}</h3>
    </Card>
  );
};

export default User;

const Card = styled.div`
  box-shadow: 0 4px 8px; 

  padding: 20px; 
  display: flex;
  flex-direction: column;
  width: 275px;
  margin: 30px 20px;
  height: 150px;
  justify-content: center;

`