
import * as types from '../constants/actionTypes';

export const initialState = {
  isAdmin: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN:
        return {
        isAdmin: action.payload.isAdmin,
      }
    default:
      return state;
  }
};
export default reducer;
