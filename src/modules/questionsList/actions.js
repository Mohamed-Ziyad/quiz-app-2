import { CALL_API } from 'constants/api'
import { API_URL } from 'constants/endpoints'
import {
  LOADING,
  FETCH_QUESTION_LIST_SUCCESS,
  ERROR,
  UPDATE_STATUS,
  REFRESH_STATUS
} from './constents'

export function fetchquestionList(topicId) {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/v1/quiz/${topicId}`,
      method: 'GET',
      credentials: 'include',
      types: [LOADING, FETCH_QUESTION_LIST_SUCCESS, ERROR]
    }
  }
}

export const updateStatus = (id, text) => ({
  type: UPDATE_STATUS,
  payload: {
    id: id,
    text: text
  }
})

export const refreshStatus = () => ({
  type: REFRESH_STATUS
})
