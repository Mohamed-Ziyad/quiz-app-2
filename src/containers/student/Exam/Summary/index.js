import { connect } from 'react-redux'

import Component from './Component'

import {
  setModeBasic,
  finishSelectedExamAndContinue
} from 'modules/exam/actions'
import { selectedItem, answers } from 'modules/exam/selectors'
import { user } from 'modules/auth/selectors'

export default connect(
  state => {
    const exam = selectedItem(state)
    return {
      exam,
      user: user(state),
      questions: exam ? exam.questions : [],
      answers: answers(state)
    }
  },
  { setModeBasic, finishSelectedExamAndContinue }
)(Component)
