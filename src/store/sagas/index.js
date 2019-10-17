import {all, takeLatest, call, put, select} from 'redux-saga/effects';
import api from '../../services/api';
import * as LoginActions from '../../store/actions/login';
import * as RepositoriesActions from '../../store/actions/repositories';
import {navigate} from '../../services/navigation';
import {RepositoriesTypes, LoginTypes} from '../actions/types';

function* login(action) {
  try {
    console.log(action);
    const {username} = action.payload;

    yield call(api.get, `/users/${username}`);

    yield put(LoginActions.loginSuccess({username}));
    navigate('Repositories');
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}
function* loadRepositories() {
  try {
    const {username} = yield select(state => state.login);

    const {data} = yield call(api.get, `/users/${username}/repos`);
    console.log(data);
    yield put(RepositoriesActions.loadRepositoriesSuccess({data}));
  } catch (err) {
    console.log(err);
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(RepositoriesTypes.REPOSITORIES_REQUEST, loadRepositories),
  ]);
}
