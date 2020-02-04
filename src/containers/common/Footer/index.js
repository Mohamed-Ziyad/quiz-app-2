import { connect } from 'react-redux'

import { user } from 'modules/auth/selectors'
import { current as currentCategory } from 'modules/category/selectors'

import Component from './Component'

export default connect(state => ({
  category: currentCategory(state),
  user: user(state)
}))(Component)
