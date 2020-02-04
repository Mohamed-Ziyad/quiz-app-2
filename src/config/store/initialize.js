import store from './index'

import { loginSuccessActionCreator } from 'modules/auth/actions'

export default function initialize() {
  const userData = localStorage.getItem('user')

  if (userData) {
    const user = JSON.parse(userData)
    store.dispatch(loginSuccessActionCreator(user))
  }
}
