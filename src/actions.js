import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS
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
