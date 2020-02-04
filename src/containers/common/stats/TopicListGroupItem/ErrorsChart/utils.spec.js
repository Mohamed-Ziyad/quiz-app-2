import { getErrorCount } from './utils'
import { PERIOD_ALL } from 'modules/stats/constants'

describe('stats TopicList ErrorPieChart utils', () => {
  describe('getErrorCount', () => {
    describe('period: all', () => {
      it('should return -1 if all errors is -1', () => {
        expect(
          getErrorCount({ current: -1, week: -1, week3: -1 }, PERIOD_ALL)
        ).toEqual(-1)
      })
      it('should return sum of not -1 values', () => {
        expect(
          getErrorCount({ current: 5, week: -1, week3: -1 }, PERIOD_ALL)
        ).toEqual(5)
      })
    })
  })
})
