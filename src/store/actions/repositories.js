import {createAction} from 'redux-actions';
import {RepositoriesTypes} from './types';
const {
  REPOSITORIES_REQUEST,
  LOAD_REPOSITORIES_SUCCESS,
  LOAD_REPOSITORIES_FAILURE,
} = RepositoriesTypes;

export const loadRepositoriesRequest = createAction(REPOSITORIES_REQUEST);
export const loadRepositoriesSuccess = createAction(LOAD_REPOSITORIES_SUCCESS);
export const loadRepositoriesFailure = createAction(LOAD_REPOSITORIES_FAILURE);

// export const loadRepositoriesSuccess = data => ({
//   type: LOAD_REPOSITORIES_SUCCESS,
//   payload: {data},
// });

// export const loadRepositoriesFailure = () => ({
//   type: LOAD_REPOSITORIES_FAILURE,
// });
