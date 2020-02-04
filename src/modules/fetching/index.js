import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from 'modules/auth/constants'
import {
  LOADING,
  FETCH_QUESTION_LIST_SUCCESS,
  ERROR
} from 'modules/questionsList/constents'
import {
  FETCH_STUDENT_STATS,
  FETCH_STUDENT_STATS_SUCCESS,
  FETCH_STUDENT_STATS_FAILURE,
  FETCH_ALL_EXAM_STATS,
  FETCH_ALL_EXAM_STATS_SUCCESS,
  FETCH_ALL_EXAM_STATS_FAILURE
} from 'modules/stats/constants'
import {
  FETCH_TOPIC_ERRORS,
  FETCH_TOPIC_ERRORS_SUCCESS,
  FETCH_TOPIC_ERRORS_FAILURE
} from 'modules/topic/constants'
import {
  FETCH_SINGLE_BY_ID as EXAM_FETCH_SINGLE_BY_ID,
  FETCH_SINGLE_BY_ID_SUCCESS as EXAM_FETCH_SINGLE_BY_ID_SUCCESS,
  FETCH_SINGLE_BY_ID_FAILURE as EXAM_FETCH_SINGLE_BY_ID_FAILURE,
  START_NEW as EXAM_START_NEW,
  START_NEW_SUCCESS as EXAM_START_NEW_SUCCESS,
  START_NEW_FAILURE as EXAM_START_NEW_FAILURE
} from 'modules/exam/constants'
import {
  FETCH_LIST as STUDENT_FETCH_LIST,
  FETCH_LIST_SUCCESS as STUDENT_FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE as STUDENT_FETCH_LIST_FAILURE,
  CREATE as STUDENT_CREATE,
  CREATE_SUCCESS as STUDENT_CREATE_SUCCESS,
  CREATE_FAILURE as STUDENT_CREATE_FAILURE,
  DESTROY as STUDENT_DESTROY,
  DESTROY_SUCCESS as STUDENT_DESTROY_SUCCESS,
  DESTROY_FAILURE as STUDENT_DESTROY_FAILURE
} from 'modules/student/constants'

const defaultState = {
  count: 0,
  any: false
}

export default function fetchingReducer(state = defaultState, action) {
  if (action.noLoader) {
    return state
  }
  switch (action.type) {
    case LOGIN:
    case FETCH_STUDENT_STATS:
    case FETCH_ALL_EXAM_STATS:
    case EXAM_FETCH_SINGLE_BY_ID:
    case EXAM_START_NEW:
    case FETCH_TOPIC_ERRORS:
    case STUDENT_FETCH_LIST:
    case STUDENT_CREATE:
    case STUDENT_DESTROY:
      return {
        count: state.count + 1,
        any: true
      }
    case LOADING:
    case FETCH_QUESTION_LIST_SUCCESS:
    case ERROR:
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
    case FETCH_STUDENT_STATS_SUCCESS:
    case FETCH_STUDENT_STATS_FAILURE:
    case FETCH_ALL_EXAM_STATS_SUCCESS:
    case FETCH_ALL_EXAM_STATS_FAILURE:
    case EXAM_FETCH_SINGLE_BY_ID_SUCCESS:
    case EXAM_FETCH_SINGLE_BY_ID_FAILURE:
    case EXAM_START_NEW_SUCCESS:
    case EXAM_START_NEW_FAILURE:
    case FETCH_TOPIC_ERRORS_SUCCESS:
    case FETCH_TOPIC_ERRORS_FAILURE:
    case STUDENT_FETCH_LIST_SUCCESS:
    case STUDENT_FETCH_LIST_FAILURE:
    case STUDENT_CREATE_SUCCESS:
    case STUDENT_CREATE_FAILURE:
    case STUDENT_DESTROY_SUCCESS:
    case STUDENT_DESTROY_FAILURE:
      return {
        count: state.count - 1,
        any: state.count - 1 > 0
      }
    default:
      return state
  }
}