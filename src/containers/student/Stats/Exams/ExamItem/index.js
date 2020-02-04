import { connect } from 'react-redux'

import Component from './Component.js'

import { select, fetchExamSingleIfNecessary } from 'modules/exam/actions'
import { selectedId } from 'modules/exam/selectors'
import { examQuestionCount } from 'modules/category/selectors'

export default connect(
  (state, ownProps) => ({
    isSelected: selectedId(state) === ownProps.id,
    examQuestionCount: examQuestionCount(state)
  }),
  { select, fetchExamSingleIfNecessary }
)(Component)
