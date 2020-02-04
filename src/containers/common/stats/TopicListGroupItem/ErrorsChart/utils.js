import {
  PERIOD_ALL,
  PERIOD_CURRENT,
  PERIOD_WEEK,
  PERIOD_WEEK3
} from 'modules/stats/constants'

export function getErrorCount(errors, period) {
  const { current, week, week3 } = errors
  switch (period) {
    case PERIOD_CURRENT:
      return current
    case PERIOD_WEEK:
      return week
    case PERIOD_WEEK3:
      return week3
    case PERIOD_ALL: {
      if (current === -1 && week === -1 && week3 === -1) {
        return -1
      }
      let sum = 0
      let count = 0
      if (current > -1) {
        sum += current
        count++
      }
      if (week > -1) {
        sum += week
        count++
      }
      if (week3 > -1) {
        sum += week3
        count++
      }
      return Math.round(sum / count)
    }
    default:
      throw new Error(`unsupported period ${period}`)
  }
}
