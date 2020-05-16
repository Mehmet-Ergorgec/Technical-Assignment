import React, { useEffect, createRef, useReducer } from 'react';
import SearchBar from './components/Searchbar/SearchBar';
import Users from './components/Users/Users';
import { data } from './data/users';
import { SearchContext } from './shared/context/search-context';
import inputReducer from './shared/Reducers/inputReducer';
import { CLICK, SEARCHBAR } from './shared/Actions/types';

import './App.css';

function App() {
  const onClickWindow = createRef();

  const [state, dispatch] = useReducer(inputReducer, {
    showDropdown: false,
    searchText: '',
    label: 'Contact',
  });

  const users = data.filter((user) => {
    if (user.name === null) {
      return 'No user found';
    }
    return user.name.toLowerCase().includes(state.searchText.toLowerCase());
  });

  const onClickOutsideHandler = () => {
    if (state.showDropdown && onClickWindow.current) {
      dispatch({ type: CLICK, label: 'Contact' });
    }
  };

  useEffect(() => {
    window.addEventListener('click', onClickOutsideHandler);

    return () => {
      window.removeEventListener('click', onClickOutsideHandler);
    };
  });

  const handleChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    dispatch({ type: SEARCHBAR, value: value });
  };

  const handleInputClick = () => {
    dispatch({ type: CLICK, label: 'Contact' });
  };

  const handleUserClick = (username) => {
    dispatch({ type: CLICK, label: '' });
    dispatch({ type: SEARCHBAR, value: username });
  };

  return (
    <SearchContext.Provider
      value={{
        handleChange: handleChange,
        handleInputClick: handleInputClick,
        handleUserClick: handleUserClick,
      }}
    >
      <div ref={onClickWindow} className='search-bar-wrapper'>
        <SearchBar
          name='search'
          value={state.searchText}
          label={state.label}
          placeholder='Type or search...'
        />
        {state.showDropdown && <Users data={users} />}
      </div>
    </SearchContext.Provider>
  );
}

export default App;
