import {
  SET_VALUE,
} from './types';

const defaultState = {
  isSelected: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_VALUE: {
      return {
        ...state,
        isSelected: true,
      };
    }
    default:
      return state;
  }
};

export default reducer;
