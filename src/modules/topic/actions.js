import { CALL_API } from 'constants/api'
import { API_URL } from 'constants/endpoints'
import { createActionWithPayloadCreator } from 'utils/actionCreators'

import {
  SELECT_TOPIC,
  FETCH_TOPIC_ERRORS,
  FETCH_TOPIC_ERRORS_SUCCESS,
  FETCH_TOPIC_ERRORS_FAILURE,
  FETCH_TOPIC_LIST,
  FETCH_TOPIC_LIST_SUCCESS,
  FETCH_TOPIC_LIST_FAILURE
  // import action types from constant
} from './constants'

export const select = createActionWithPayloadCreator(SELECT_TOPIC)

// Fetching starts here: after dispatching this action goes through all middlewares
// but we going to middleware/api/index.js

export function fetchTopicErrors(studentId, topicId) {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/v1/student/${studentId}/topicerrors/${topicId}`,
      method: 'GET',
      credentials: 'include',
      types: [
        FETCH_TOPIC_ERRORS,
        FETCH_TOPIC_ERRORS_SUCCESS,
        FETCH_TOPIC_ERRORS_FAILURE
      ]
    }
  }
}

// WARNING! Duplicats stats.fetchStudentStats
// It's legacy API, so keep them separate. In updated API they can be separated. Or not...
export function fetchTopicList(studentId = 'me') {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/v1/student/${studentId}`,
      method: 'GET',
      credentials: 'include',
      types: [
        FETCH_TOPIC_LIST,
        FETCH_TOPIC_LIST_SUCCESS,
        FETCH_TOPIC_LIST_FAILURE
      ]
    }
  }
}
