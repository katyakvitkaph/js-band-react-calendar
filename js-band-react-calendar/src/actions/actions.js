import * as types from '../constants/actionTypes';


// Login
 const login = value => ({
  type: types.LOGIN,
  payload: value
});


export const error = value => ({
  type: types.ERROR,
  payload: value
});

export default login;