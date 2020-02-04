import { connect } from 'react-redux'
import { compose } from 'redux'

import Component from './Component'

import { selectQuestion } from 'modules/exam/actions'
import { selectedQuestionIndex, answers } from 'modules/exam/selectors'
import { examQuestionCount } from 'modules/category/selectors'

export default compose(
  connect(
    state => ({
      examQuestionCount: examQuestionCount(state),
      selectedQuestionIndex: selectedQuestionIndex(state),
      answers: answers(state)
    }),
    { selectQuestion }
  )
)(Component)
