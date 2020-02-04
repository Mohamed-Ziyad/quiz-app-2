import { createSelector } from 'reselect'
import { AREAS } from './HARDCODED'
import { listObj as topicsObj } from 'modules/topic/selectors'

export const areas = () => AREAS
export const areasWithTopics = createSelector(
  areas,
  topicsObj,
  (areas, topicsObj) =>
    areas.map(area => ({
      ...area,
      topics: area.topics.map(id => topicsObj[id])
    }))
)
