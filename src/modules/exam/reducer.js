import createReducer from 'utils/createReducer'

import {
  SELECT_EXAM,
  FETCH_SINGLE_BY_ID_SUCCESS,
  SELECT_QUESTION,
  ANSWER_QUESTION,
  MODE_BASIC,
  SET_MODE,
  TOGGLE_EXPLANATION
} from './constants'
import { parseExam } from './parse'

const DEFAULT_STATE = {
  selectedId: null,
  exams: {},
  answers: [],
  explanationEnabled: false,
  selectedQuestionIndex: 0,
  mode: MODE_BASIC
}

function mergeEntity(state, action) {
  const {
    response: { exam, questions }
  } = action
  return {
    ...state,
    exams: {
      ...state.exams,
      [exam.id]: { ...parseExam(action.category, exam), questions }
    }
  }
}

export default createReducer(DEFAULT_STATE, {
  [FETCH_SINGLE_BY_ID_SUCCESS]: mergeEntity,
  // [START_NEW_SUCCESS]: mergeEntity, // see actions
  [SELECT_EXAM]: (state, action) => ({
    ...state,
    selectedId: action.payload,
    answers: [],
    selectedQuestionIndex: 0,
    mode: MODE_BASIC
  }),
  [SELECT_QUESTION]: (state, action) => ({
    ...state,
    selectedQuestionIndex: action.payload
  }),
  [ANSWER_QUESTION]: (state, { payload: { questionIndex, answer } }) => {
    const { answers } = state
    const newAnswers = answers.slice(0)
    newAnswers[questionIndex] = answer
    return {
      ...state,
      answers: newAnswers
    }
  },
  [SET_MODE]: (state, action) => ({
    ...state,
    mode: action.payload
  }),
  [TOGGLE_EXPLANATION]: state => ({
    ...state,
    explanationEnabled: !state.explanationEnabled
  })
})
