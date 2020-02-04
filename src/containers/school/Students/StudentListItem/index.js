import { connect } from 'react-redux'

import Component from './Component'

import { current as currentCategory } from 'modules/category/selectors'
import { destroy } from 'modules/student/actions'

const openEditor = () => ({
  type: 'FAKE'
})

export default connect(
  state => ({ category: currentCategory(state) }),
  { openEditor, destroy }
)(Component)
