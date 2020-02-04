import { CALL_API } from 'constants/api'
import { API_URL } from 'constants/endpoints'
import { createActionWithPayloadCreator } from 'utils/actionCreators'

import {
  FETCH_STUDENT_STATS,
  FETCH_STUDENT_STATS_SUCCESS,
  FETCH_STUDENT_STATS_FAILURE,
  FETCH_ALL_EXAM_STATS,
  FETCH_ALL_EXAM_STATS_SUCCESS,
  FETCH_ALL_EXAM_STATS_FAILURE,
  FETCH_SCHOOL_STATS,
  FETCH_SCHOOL_STATS_SUCCESS,
  FETCH_SCHOOL_STATS_FAILURE,
  SET_PERIOD
} from './constants'

export const setPeriod = createActionWithPayloadCreator(SET_PERIOD)

export function fetchStudentStats(studentId) {
  const endpoint =
    studentId === 'me'
      ? `${API_URL}/v1/student`
      : `${API_URL}/v1/student/${studentId}`
  return {
    [CALL_API]: {
      endpoint,
      method: 'GET',
      credentials: 'include',
      types: [
        FETCH_STUDENT_STATS,
        FETCH_STUDENT_STATS_SUCCESS,
        FETCH_STUDENT_STATS_FAILURE
      ]
    }
  }
}

export function fetchAllExamStats(studentId) {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/v1/student/${studentId}/exam`,
      method: 'GET',
      credentials: 'include',
      types: [
        FETCH_ALL_EXAM_STATS,
        FETCH_ALL_EXAM_STATS_SUCCESS,
        FETCH_ALL_EXAM_STATS_FAILURE
      ]
    }
  }
}

export function fetchSchoolStats() {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/v1/school/me`,
      method: 'GET',
      credentials: 'include',
      types: [
        FETCH_SCHOOL_STATS,
        FETCH_SCHOOL_STATS_SUCCESS,
        FETCH_SCHOOL_STATS_FAILURE
      ]
    }
  }
}
