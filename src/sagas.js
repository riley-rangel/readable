import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { v4 as uuid4 } from 'uuid'
import * as API from './API'
import { GET_CATEGORIES, SAVE_POST } from './constants'
import {
  getCategoriesSuccess,
  getCategoriesFailure,
  savePostSuccess,
  savePostFailure,
} from './actions';

export function* fetchCategories() {
  try {
    const categories = yield call(API.getCategories)
    yield put(getCategoriesSuccess(categories))
  } catch ({ message }) {
    yield put(getCategoriesFailure(message))
  }
}

export function* savePost({ post: { author, body, category, title } }) {
  try {
    const post = yield call(API.savePost, {
      id: uuid4(),
      author,
      body,
      category,
      timestamp: Date.now(),
      title,
    })
    yield put(savePostSuccess(post))
  } catch ({ message }) {
    yield put(savePostFailure(message))
  }
}

export function* fetchCategoriesWatcher() {
  yield takeEvery(GET_CATEGORIES, fetchCategories)
}

export function* savePostWatcher() {
  yield takeEvery(SAVE_POST, savePost)
}

const watchers = [
  fetchCategoriesWatcher,
  savePostWatcher,
]

export default function* rootSaga() {
  yield all([...watchers].map(fork))
}
