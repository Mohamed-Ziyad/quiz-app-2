import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import api from 'middleware/api'
import errorMiddleware from 'middleware/errorMiddleware'
import { createLogger } from 'redux-logger'

import rootReducer from '../../modules'

const middlewares = [thunk, api, errorMiddleware]

if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = createLogger({
    collapsed: (getState, action, logEntry) => !logEntry.error && !action.error
  })
  middlewares.push(loggerMiddleware)
}

export default createStore(rootReducer, applyMiddleware(...middlewares))
