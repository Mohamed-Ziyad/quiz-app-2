import createReducer from 'utils/createReducer'

import {
  FETCH_LIST_SUCCESS,
  EDITOR_CREATE,
  EDITOR_UPDATE,
  EDITOR_CLOSE,
  DESTROY_SUCCESS
} from './constants'

const DEFAULT_STATE = {
  list: [],
  editorOpen: false,
  editorInitialValues: null
}

export default createReducer(DEFAULT_STATE, {
  [FETCH_LIST_SUCCESS]: (state, action) => ({
    ...state,
    list: action.response.students
  }),
  [EDITOR_CREATE]: state => ({
    ...state,
    editorOpen: true,
    editorInitialValues: null
  }),
  [EDITOR_UPDATE]: (state, action) => ({
    ...state,
    editorOpen: true,
    editorInitialValues: action.payload
  }),
  [EDITOR_CLOSE]: state => ({
    ...state,
    editorOpen: false,
    editorInitialValues: null
  }),
  [DESTROY_SUCCESS]: (state, action) => ({
    ...state,
    list: state.list.filter(item => item.id !== action.id)
  })
})
