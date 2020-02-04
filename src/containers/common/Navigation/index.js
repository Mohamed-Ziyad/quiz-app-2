import { connect } from 'react-redux'

import { user } from 'modules/auth/selectors'
import { anyFetching } from 'modules/fetching/selectors'
import { current as currentCategory } from 'modules/category/selectors'
import { logoutAndRedirect } from 'modules/auth/actions'

import Component from './Component'

export default connect(
  state => ({
    anyFetching: anyFetching(state),
    category: currentCategory(state),
    user: user(state)
  }),
  { logoutAndRedirect }
)(Component)
