import { logoutAndRedirect } from 'modules/auth/actions'
import APIError from 'errors/APIError'

function handleError(store, next, action, error) {
  if (error instanceof APIError) {
    switch (error.status) {
      case 401:
        store.dispatch(logoutAndRedirect({ message: error.message }))
        break
      default:
        // unkown API error
        console.error(error)
    }
  } else {
    // unknown error
    console.error(error)
  }
}

export default store => next => action => {
  const { error } = action
  if (error && error instanceof Error) {
    handleError(store, next, action, error)
  }
  return next(action)
}
