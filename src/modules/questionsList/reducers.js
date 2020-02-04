import createReducer from 'utils/createReducer'
import {
  LOADING,
  FETCH_QUESTION_LIST_SUCCESS,
  ERROR,
  UPDATE_STATUS,
  REFRESH_STATUS
} from './constents'
const DEFAULT_STATE = {
  loading: false,
  loaded: false,
  questionsList: [],
  status: [],
  error: null
}

export default createReducer(DEFAULT_STATE, {
  [LOADING]: state => ({
    ...state,
    loading: true
  }),
  [FETCH_QUESTION_LIST_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    loaded: true,
    questionsList: action.response.questions
  }),
  [ERROR]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload
  }),
  [UPDATE_STATUS]: (state, { payload: { id, text } }) => {
    const { status } = state
    // let newStatus = status.slice(0)
    // newStatus[id] = { id: id, text: text }
    // return { ...state, status: newStatus }
    // newStatus[id].push({ id: id, text: text })
    let newItem = { id: id, text: text }
    let newStatus = status.slice()
    newStatus.push(newItem)
    return { ...state, status: newStatus }
  },
  [REFRESH_STATUS]: state => ({
    ...state,
    status: []
  })
})
