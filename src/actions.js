import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  SAVE_POST,
  SAVE_POST_FAILURE,
  SAVE_POST_SUCCESS,
} from './constants'

export const getCategories = () => ({
  type: GET_CATEGORIES,
})

export const getCategoriesSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  categories,
})

export const getCategoriesFailure = (message) => ({
  type: GET_CATEGORIES_FAILURE,
  message,
})

export const savePost = (post) => ({
  type: SAVE_POST,
  post,
})

export const savePostSuccess = (post) => ({
  type: SAVE_POST_SUCCESS,
  post,
})

export const savePostFailure = (message) => ({
  type: SAVE_POST_FAILURE,
  message,
})
