import { CLICK, SEARCHBAR } from '../Actions/types';

const inputReducer = (state, action) => {
  switch (action.type) {
    case CLICK:
      return { ...state, showDropdown: !state.showDropdown, label: action.label };
    case SEARCHBAR:
      return { ...state, searchText: action.value };
    default:
      return state;
  }
};

export default inputReducer;
