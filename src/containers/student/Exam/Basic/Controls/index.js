import { connect } from 'react-redux'

import Component from './Component'

import { selectQuestion, setModeSummary } from 'modules/exam/actions'
import { selectedItem, selectedQuestionIndex } from 'modules/exam/selectors'
import { user } from 'modules/auth/selectors'
import { examDuration, examQuestionCount } from 'modules/category/selectors'

export default connect(
  state => ({
    exam: selectedItem(state),
    user: user(state),
    examDuration: examDuration(state),
    examQuestionCount: examQuestionCount(state),
    selectedQuestionIndex: selectedQuestionIndex(state)
  }),
  { selectQuestion, setModeSummary }
)(Component)
