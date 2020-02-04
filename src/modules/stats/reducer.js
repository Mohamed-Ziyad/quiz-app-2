import createReducer from 'utils/createReducer'

import { parseExam } from '../exam/parse'

import {
  FETCH_STUDENT_STATS_SUCCESS,
  FETCH_ALL_EXAM_STATS_SUCCESS,
  FETCH_SCHOOL_STATS_SUCCESS,
  SET_PERIOD,
  PERIOD_ALL
} from './constants'

const DEFAULT_STATE = {
  period: PERIOD_ALL,
  studentStats: null,
  allExamStats: null,
  schoolStats: null
}

export default createReducer(DEFAULT_STATE, {
  [FETCH_STUDENT_STATS_SUCCESS]: (state, action) => ({
    ...state,
    studentStats: {
      student: action.response.student,
      topics: action.response.topics
    }
  }),
  [FETCH_ALL_EXAM_STATS_SUCCESS]: (
    state,
    {
      category = 'b',
      response: {
        exams: { current, week, week3 }
      }
    }
  ) => ({
    ...state,
    allExamStats: {
      current: current.map(item => parseExam(category, item)), // TEMPORARY FIX BACKEND ISSUE
      week: week.map(item => parseExam(category, item)),
      week3: week3.map(item => parseExam(category, item))
    }
  }),
  [FETCH_SCHOOL_STATS_SUCCESS]: (
    state,
    { response: { guest_visits, exams, topics, students } }
  ) => ({
    ...state,
    schoolStats: {
      guest_visits,
      exams,
      topics,
      students
    }
  }),
  [SET_PERIOD]: (state, action) => ({
    ...state,
    period: action.payload
  })
})
