import createReducer from 'utils/createReducer'

import {
  SELECT_TOPIC,
  FETCH_TOPIC_ERRORS_SUCCESS,
  FETCH_TOPIC_LIST_SUCCESS
} from './constants'

const DEFAULT_STATE = {
  selectedId: null,
  errors: [],
  list: []
}

export default createReducer(DEFAULT_STATE, {
  [FETCH_TOPIC_ERRORS_SUCCESS]: (state, action) => ({
    ...state,
    errors: action.response.questions
  }),
  [SELECT_TOPIC]: (state, action) => ({
    ...state,
    selectedId: action.payload
  }),

  [FETCH_TOPIC_LIST_SUCCESS]: (state, action) => ({
    ...state,
    list: action.response.topics
  })
})
