/* eslint-disable import/prefer-default-export */
import {
  takeEvery, all, put,
} from 'redux-saga/effects';
import { BUTTON_CLICK, SET_VALUE } from './types';

function* buttonClick() {
  yield put({ type: SET_VALUE, payload: true });
}

function* watchButtonClick() {
  yield takeEvery(BUTTON_CLICK, buttonClick);
}

export function* combinedSaga() {
  yield all([
    watchButtonClick(),
  ]);
}
