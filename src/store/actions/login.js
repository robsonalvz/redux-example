import {createAction} from 'redux-actions';
import {LoginTypes} from './types';
const {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} = LoginTypes;

export const loginRequest = createAction(LOGIN_REQUEST);
export const loginSuccess = createAction(LOGIN_SUCCESS);
export const loginFailure = createAction(LOGIN_FAILURE);

// export const loginRequest = username => ({
//   type: LOGIN_REQUEST,
//   payload: {username},
// });

// export const loginSuccess = username => ({
//   type: LOGIN_SUCCESS,
//   payload: {username},
// });

// export const loginFailure = () => ({
//   type: LOGIN_FAILURE,
// });
