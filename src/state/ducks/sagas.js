import { all } from 'redux-saga/effects';
import { combinedSaga as userSaga } from './user/sagas';

export default function* rootSaga() {
  yield all([
    userSaga(),
  ]);
}
