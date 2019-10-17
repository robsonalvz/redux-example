import {handleActions} from 'redux-actions';
import {RepositoriesTypes} from '../actions/types';

const {
  REPOSITORIES_REQUEST,
  LOAD_REPOSITORIES_SUCCESS,
  LOAD_REPOSITORIES_FAILURE,
} = RepositoriesTypes;

export default handleActions(
  new Map([
    [REPOSITORIES_REQUEST, (state, action) => ({...state, loading: true})],
    [
      LOAD_REPOSITORIES_SUCCESS,
      (state, action) => ({
        ...state,
        data: action.payload.data,
        error: false,
        loading: false,
      }),
    ],
    [
      LOAD_REPOSITORIES_FAILURE,
      (state, action) => ({
        ...state,
        error: true,
        loading: false,
      }),
    ],
  ]),
  {data: [], loading: false, error: false},
);

// const INITIAL_STATE = {
//   data: [],
//   loading: false,
//   error: false,
// };

// export default function repositories(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'REPOSITORIES_REQUEST':
//       return {...state, loading: true};
//     case 'LOAD_REPOSITORIES_SUCCESS':
//       return {
//         ...state,
//         data: action.payload.data,
//         loading: false,
//         error: false,
//       };
//     case 'LOAD_REPOSITORIES_FAILURE':
//       return {...state, loading: false, error: true};
//     default:
//       return state;
//   }
// }
