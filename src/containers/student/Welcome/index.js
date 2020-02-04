import { connect } from 'react-redux'

import { current as currentCategory } from 'modules/category/selectors'

import Component from './Component'

export default connect(state => ({ category: currentCategory(state) }))(
  Component
)
