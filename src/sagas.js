import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as API from './API'
import { getCategoriesSuccess, getCategoriesFailure } from './actions';
import { GET_CATEGORIES } from './constants'

export function* fetchCategories() {
  try {
    const categories = yield call(API.getCategories)
    yield put(getCategoriesSuccess(categories))
  } catch ({ message }) {
    yield put(getCategoriesFailure(message))
  }
}

export function* fetchCategoriesWatcher() {
  yield takeEvery(GET_CATEGORIES, fetchCategories)
}

export default function* rootSaga() {
  yield all([fetchCategoriesWatcher].map(fork))
}
