import { parseISOUTCDateString } from './parse'

describe('utils parse', () => {
  describe('parseISOUTCDateString', () => {
    it('should return local datetimeIT', () => {
      expect(parseISOUTCDateString('2019-08-03 10:55:02')).toEqual(
        new Date('2019-08-03T10:55:02.000Z')
      )
      expect(parseISOUTCDateString('2019-08-03T10:55:02Z')).toEqual(
        new Date('2019-08-03T10:55:02.000Z')
      )
      expect(parseISOUTCDateString('2019-08-03T10:55:02.000Z')).toEqual(
        new Date('2019-08-03T10:55:02.000Z')
      )
    })
  })
})
