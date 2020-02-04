import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './constants'

import createReducer from '../../utils/createReducer'

const DEFAULT_STATE = {
  isAuthenticating: false,
  isAuthenticated: false,
  user: null,
  error: null
}

export default createReducer(DEFAULT_STATE, {
  [LOGIN]: state => ({
    ...state,
    isAuthenticating: true
  }),
  [LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    isAuthenticating: false,
    isAuthenticated: true,
    user: action.payload,
    error: null
  }),
  [LOGIN_FAILURE]: (state, action) => ({
    ...state,
    isAuthenticating: false,
    isAuthenticated: false,
    error: action.error
  }),
  [LOGOUT]: () => DEFAULT_STATE
})
