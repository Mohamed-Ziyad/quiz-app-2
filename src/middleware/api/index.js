import qs from 'qs'

import { CALL_API } from 'constants/api'

import { parseJSON, checkStatus } from './common'

// here we create final "options" for fetch
// setting headers about content type
// setting options.body from params.data if it present
// setting query if it present
export async function makeAPICall(endpoint, params) {
  const options = {
    headers: {
      Accept: 'application/json'
    },
    credentials: 'same-origin',
    method: 'GET'
  }
  if (params.method) {
    options.method = params.method
  }
  if (params.mode) {
    options.mode = params.mode
  }
  if (params.credentials) {
    options.credentials = params.credentials
  }
  if (params.data) {
    if (process.env.NODE_ENV !== 'production') {
      try {
        options.body = JSON.stringify(params.data)
      } catch (err) {
        console.error(err)
        console.log('params.data', params.data)
        throw err
      }
    } else {
      options.body = JSON.stringify(params.data)
    }
    options.headers['Content-Type'] = 'application/json'
  }
  if (params.body) {
    options.body = params.body
  }
  if (params.query) {
    endpoint += '?' + qs.stringify(params.query, { arrayFormat: 'brackets' })
  }
  if (params.headers) {
    options.headers = {
      ...options.headers,
      ...params.headers
    }
  }

  const res = await fetch(endpoint, options)
  // we got response, check statusCode and throw exception if something unexpected happend on backend
  await checkStatus(res)
  // backend (as usual) returns JSON, so parse response body
  return await parseJSON(res)
}

function appendAction(action, data) {
  const finalAction = Object.assign({}, action, data)
  delete finalAction[CALL_API]
  return finalAction
}

async function handleCallAPI(next, action) {
  // here we prepare arguments for fetch function
  const params = action[CALL_API]

  // pick endpoint and 3 types: [requestType, successType, failureType]
  const { endpoint, types } = params

  const [requestType, successType, failureType] = types

  // before calling "fetch" we dispatch action with type = "requestType"
  // we can handle this kind of action in reducer for example to toggling
  // loader animation flag (in this project it stores here: state.fetching.any
  // (see selector at modules/fetching/selectors.js, it used to show loader animation near brand in navigation bar
  // (see containers/Layout/Navigation/index.js)))
  next(appendAction(action, { type: requestType }))

  try {
    // now loader animation started, so we can call fetch! (makeAPICall is just a helper)
    const response = await makeAPICall(endpoint, params)
    // ok, statusCode is 200, in response we got JSON string, we have parsed it
    // not we can call action with second type - successType,
    // this action contains "response" field - parsed response body
    // in reducers we just merge (or transform if necessary) this object into our state
    return next(
      appendAction(action, {
        type: successType,
        response
      })
    )
  } catch (error) {
    // if something goes wrong (network error/backend error)
    // we dispatching action with third type - failureType
    // this action will contain error field with Error instance (not just string, but whole error,
    // in errorMiddleware we will handle it! (for now it just console.log, later we will send them to Sentry))
    return next(
      appendAction(action, {
        type: failureType,
        error
      })
    )
  }
}

// this middleware checks "there is a [CALL_API] field in action?",
// if yes, we perform call (go to handleCallAPI function)
// else it's not a fetching action, just call next middleware
export default () => next => action =>
  action[CALL_API] !== undefined ? handleCallAPI(next, action) : next(action)
