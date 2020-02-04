export default function createReducer(defaultState, handlers) {
  return function reducer(state = defaultState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
