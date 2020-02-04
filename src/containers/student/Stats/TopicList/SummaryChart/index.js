import { connect } from 'react-redux'

import Component from './Component'

import { chartData } from './selectors'
import {
  current as currentCategory,
  examQuestionCount
} from 'modules/category/selectors'

export default connect(state => ({
  data: chartData(state),
  examQuestionCount: examQuestionCount(state),
  category: currentCategory(state)
}))(Component)
