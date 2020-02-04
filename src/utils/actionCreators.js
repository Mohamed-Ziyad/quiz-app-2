export function createAction(type) {
  return { type }
}

export function createActionCreator(type) {
  return function actionCreator() {
    return {
      type
    }
  }
}

export function createActionWithPayloadCreator(type) {
  return function actionCreator(payload) {
    return {
      type,
      payload
    }
  }
}

export function createActionWithErrorCreator(type) {
  return function actionCreator(error) {
    return {
      type,
      error
    }
  }
}
