import { CALL_API } from 'constants/api'
import { API_URL } from 'constants/endpoints'
import {
  createActionCreator,
  createActionWithPayloadCreator
} from 'utils/actionCreators'

import {
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
  EDITOR_CREATE,
  EDITOR_UPDATE,
  EDITOR_CLOSE,
  CREATE,
  CREATE_SUCCESS,
  CREATE_FAILURE,
  DESTROY,
  DESTROY_SUCCESS,
  DESTROY_FAILURE
} from './constants'

// WARNING! Duplicats stats.fetchStudentStats
// It's legacy API, so keep them separate. In updated API they can be separated. Or not...
export function fetchStudentList() {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/v1/school/me/students`,
      method: 'GET',
      credentials: 'include',
      types: [FETCH_LIST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE]
    }
  }
}

export const editorCreate = createActionCreator(EDITOR_CREATE)
export const editorUpdate = createActionWithPayloadCreator(EDITOR_UPDATE)
export const editorClose = createActionCreator(EDITOR_CLOSE)

function create(data) {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/v1/school/me/newstudent`,
      method: 'POST',
      credentials: 'include',
      data,
      types: [CREATE, CREATE_SUCCESS, CREATE_FAILURE]
    }
  }
}

export function createAndReload(data) {
  return async dispatch => {
    const resultAction = await dispatch(create(data))
    if (resultAction.type === CREATE_SUCCESS) {
      await dispatch(fetchStudentList())
    }
    return resultAction
  }
}

export function destroy(id) {
  return {
    [CALL_API]: {
      endpoint: `${API_URL}/v1/school/me/student/${id}`,
      method: 'DELETE',
      credentials: 'include',
      types: [DESTROY, DESTROY_SUCCESS, DESTROY_FAILURE]
    },
    id
  }
}
