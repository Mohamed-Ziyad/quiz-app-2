import { connect } from 'react-redux'

import Component from './Component'

import { select, fetchExamSingleIfNecessary } from 'modules/exam/actions'
import { selectedItem } from 'modules/exam/selectors'
import { examQuestionCount } from 'modules/category/selectors'

export default connect(
  state => ({
    exam: selectedItem(state),
    examQuestionCount: examQuestionCount(state)
  }),
  { select, fetchExamSingleIfNecessary }
)(Component)
