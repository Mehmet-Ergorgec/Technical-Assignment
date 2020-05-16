import React from 'react';
import Username from '../Username/Username';

import './users.css';

const Users = ({ data }) => (
  <ul className='user-list'>
    {data.map((user, index) => (
      <Username key={index} user={user} />
    ))}
  </ul>
);

export default Users;
