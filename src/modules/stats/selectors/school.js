import { createSelector } from 'reselect'

import { period } from './common'

import {
  PERIOD_ALL,
  PERIOD_CURRENT,
  PERIOD_WEEK,
  PERIOD_WEEK3
} from '../constants'

const schoolStats = state => state.stats.schoolStats

function getArrayValueForCurrentPeriod(array, period) {
  const [current, week, week3] = array
  switch (period) {
    case PERIOD_ALL: {
      let result = 0
      if (current > -1) {
        result += current
      }
      if (week > -1) {
        result += week
      }
      if (week3 > -1) {
        result += week3
      }
      return result
    }
    case PERIOD_CURRENT:
      return current > -1 ? current : 0
    case PERIOD_WEEK:
      return week > -1 ? week : 0
    case PERIOD_WEEK3:
      return week3 > -1 ? week3 : 0
    default:
      return 0
  }
}

export const guestVisitsForCurrentPeriod = createSelector(
  schoolStats,
  period,
  (info, period) =>
    info ? getArrayValueForCurrentPeriod(info.guest_visits, period) : 0
)

export const examsForCurrentPeriod = createSelector(
  schoolStats,
  period,
  (info, period) =>
    info ? getArrayValueForCurrentPeriod(info.exams, period) : 0
)

const EMPTY_TOPICS = []
export const topics = createSelector(
  schoolStats,
  info => (info ? info.topics : EMPTY_TOPICS)
)

const EMPTY_STUDENTS = { best: [], worst: [] }
export const students = createSelector(
  schoolStats,
  period,
  (info, period) => {
    if (!info) {
      return EMPTY_STUDENTS
    }
    const { current, week, week3 } = info.students
    switch (period) {
      case PERIOD_ALL: {
        const best = [...current.best, ...week.best, ...week3.best]
        const worst = [...current.worst, ...week.worst, ...week3.worst]
        return { best, worst }
      }
      case PERIOD_CURRENT:
        return current
      case PERIOD_WEEK:
        return week
      case PERIOD_WEEK3:
        return week3
      default:
        return EMPTY_STUDENTS
    }
  }
)
