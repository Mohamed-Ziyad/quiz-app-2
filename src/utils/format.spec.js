import { datetimeIT, duration } from './format'

describe('utils format', () => {
  describe('datetimeIT', () => {
    it('should return local datetimeIT', () => {
      // my timezone has +05:00 offset, so it tests works only for me, sorry
      expect(datetimeIT('2019-08-03 10:55:02')).toEqual('3 agosto 2019 15:55')
      expect(datetimeIT('2019-08-03T10:55:02Z')).toEqual('3 agosto 2019 15:55')
      expect(datetimeIT('2019-08-03T10:55:02.000Z')).toEqual(
        '3 agosto 2019 15:55'
      )
    })
  })

  describe('duration', () => {
    it('should return formatted duration', () => {
      expect(duration(0)).toEqual('00:00')
      expect(duration(9)).toEqual('00:09')
      expect(duration(19)).toEqual('00:19')
      expect(duration(60)).toEqual('01:00')
      expect(duration(69)).toEqual('01:09')
      expect(duration(70)).toEqual('01:10')
      expect(duration(60 * 60 + 1)).toEqual('60:01')
      expect(duration(-1)).toEqual('-00:01')
    })
  })
})
