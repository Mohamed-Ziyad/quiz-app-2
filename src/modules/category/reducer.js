import createReducer from 'utils/createReducer'

import { SELECT_CATEGORY } from './constants'

const DEFAULT_STATE = {
  current: null
}

export default createReducer(DEFAULT_STATE, {
  [SELECT_CATEGORY]: (state, action) => ({
    ...state,
    current: action.payload
  })
})
