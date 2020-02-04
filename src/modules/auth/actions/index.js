import {
  createAction,
  createActionWithPayloadCreator,
  createActionWithErrorCreator
} from 'utils/actionCreators'

import { API_URL } from 'constants/endpoints'
import APIError from 'errors/APIError'

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constants'

import history from 'config/history'

import prepareAuthData from './prepareAuthData'

const REDIRECT_AFTER_SUCCESS_AUTH = '/'

const loginStart = createAction(LOGIN)
export const loginSuccessActionCreator = createActionWithPayloadCreator(
  LOGIN_SUCCESS
)
const loginFailureActionCreator = createActionWithErrorCreator(LOGIN_FAILURE)

const logoutAction = createAction(LOGOUT)

const LOGIN_URL = `${API_URL}/v1/authorize`

async function getNonce() {
  const res = await fetch(LOGIN_URL)
  const json = await res.json()
  return json.nonce
}

function sanitizeUser(user) {
  delete user.password
  return user
}

export function login({ username, password }) {
  return async dispatch => {
    dispatch(loginStart)
    try {
      const nonce = await getNonce()
      const data = prepareAuthData(username, password, nonce)
      const res = await fetch(LOGIN_URL, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const json = await res.json()
      if (json.status === 200) {
        dispatch(loginSuccessActionCreator(json.user))
        localStorage.setItem('user', JSON.stringify(sanitizeUser(json.user)))
        history.push(REDIRECT_AFTER_SUCCESS_AUTH)
      } else {
        dispatch(
          loginFailureActionCreator(new APIError(json.status, json.description))
        )
      }
    } catch (err) {
      dispatch(loginFailureActionCreator(err))
    }
  }
}

export function logoutAndRedirect() {
  localStorage.removeItem('user')
  return logoutAction
}
