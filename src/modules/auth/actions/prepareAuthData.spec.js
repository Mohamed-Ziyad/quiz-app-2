import prepareAuthData from './prepareAuthData'

describe('auth prepareAuthData', () => {
  it('should return object with valid auth data', () => {
    expect(
      prepareAuthData('user1', 'pass1', '4e302deaba2f49d2d878f233bddd583c')
    ).toEqual({
      nonce: '4e302deaba2f49d2d878f233bddd583c',
      login: 'user1',
      appid: 'd1053fc29b0e07c7173890db4be19515bc04ae48',
      quiz_type: 'b2016',
      digest: '8a1ac73f6700576ac8c92a237ce48352',
      digest_old: '8b4c3cad2befd1f1d2e3354de83d85da',
      passwd: 'pass1'
    })
  })
})
