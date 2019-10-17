import {handleActions} from 'redux-actions';
import {LoginTypes} from '../actions/types';

const {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} = LoginTypes;

export default handleActions(
  new Map([
    [LOGIN_REQUEST, (state, action) => ({...state, loading: true})],

    [
      LOGIN_SUCCESS,
      (state, action) => ({
        ...state,
        username: action.payload.username,
        error: false,
        loading: false,
      }),
    ],

    [
      LOGIN_FAILURE,
      (state, action) => ({
        ...state,
        error: true,
        loading: false,
      }),
    ],
  ]),
  {},
);

// const INITIAL_STATE = {
//   username: null,
//   error: false,
//   loading: false,
// };
// export default function login(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'LOGIN_REQUEST':
//       return {...state, loading: true};
//     case 'LOGIN_SUCCESS':
//       console.log(action.payload);
//       return {
//         ...state,
//         username: action.payload.username,
//         error: false,
//         loading: false,
//       };
//     case 'LOGIN_FAILURE':
//       return {...state, error: true, loading: false};
//     default:
//       return state;
//   }
// }
