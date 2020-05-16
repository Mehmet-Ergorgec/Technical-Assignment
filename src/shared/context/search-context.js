import { createContext } from 'react';

export const SearchContext = createContext({
  handleChange: () => {},
  handleInputClick: () => {},
  handleUserClick: () => {},
});
