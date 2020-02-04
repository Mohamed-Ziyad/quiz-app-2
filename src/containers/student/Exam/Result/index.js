import { connect } from 'react-redux'

import { selectedId, invalidAnswersCount } from 'modules/exam/selectors'
import { current as currentCategory } from 'modules/category/selectors'

import Component from './Component'

export default connect(state => ({
  invalidAnswersCount: invalidAnswersCount(state),
  selectedId: selectedId(state),
  category: currentCategory(state)
}))(Component)
