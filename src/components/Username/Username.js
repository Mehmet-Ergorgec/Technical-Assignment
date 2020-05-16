import React, { useContext } from 'react';
import { SearchContext } from '../../shared/context/search-context';

const Username = ({ user }) => {
  const search = useContext(SearchContext);

  return <li onClick={() => search.handleUserClick(user.name)}>{user.name}</li>;
};

export default Username;
