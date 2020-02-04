import { connect } from 'react-redux'

import Component from './Component'

import { current as currentCategory } from 'modules/category/selectors'

export default connect(state => ({ category: currentCategory(state) }))(
  Component
)
