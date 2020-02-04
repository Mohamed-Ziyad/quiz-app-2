import md5 from 'md5'

const APP_ID = 'd1053fc29b0e07c7173890db4be19515bc04ae48'
const QUIZ_TYPE = 'b2016'
const SALT = 'oCDVQctuE4AFrbY2GukLBcvno2RBj9oH1XR5P8nC'

export default function prepareAuthData(username, password, nonce) {
  let digest = md5(SALT + ':' + password)
  digest = md5(nonce + ':' + digest)
  // for backward compatibility
  let digest_old = md5(username + ':' + password)
  digest_old = md5(nonce + ':' + digest_old)

  return {
    nonce,
    login: username,
    appid: APP_ID,
    quiz_type: QUIZ_TYPE,
    digest: digest,
    digest_old: digest_old,
    passwd: password
  }
}
