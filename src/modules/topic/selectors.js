import { createSelector } from 'reselect'

export const selectedId = state => state.topic.selectedId
export const errors = state => state.topic.errors
export const list = state => state.topic.list

export const listObj = createSelector(
  list,
  list =>
    list.reduce((result, topic) => {
      result[topic.id] = topic
      return result
    }, {})
)
