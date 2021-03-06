import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS, SAVE_POST_FAILURE, SAVE_POST_SUCCESS } from './constants'
import initialState from './initialState'



function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_CATEGORIES_FAILURE:
      console.log(action.message)
      return state
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
      }
    case SAVE_POST_FAILURE:
      console.log(action.message)
      return state
    case SAVE_POST_SUCCESS:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            ...action.post,
          },
        ],
      }
    default:
      return state
  }
}

export default combineReducers({
  app: reducer,
  form: formReducer,
})
