import { connect } from 'react-redux'

import { isAuthenticated, userType } from 'modules/auth/selectors'

import Component from './Component'

export default connect(state => ({
  isAuthenticated: isAuthenticated(state),
  userType: userType(state)
}))(Component)
