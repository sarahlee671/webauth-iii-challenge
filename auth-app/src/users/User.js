import React from 'react';
import '../App.css'

const User = props => {
  return (
    <div className="user-card">
      <h3>id: {props.id}</h3>
      <h3>username: {props.name}</h3>
      <h3>department: {props.department}</h3>
    </div>
  );
};

// User.defaultProps = {
//   id: '',
//   username: '',
//   department: ''
// };

export default User;