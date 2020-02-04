import { connect } from 'react-redux'

import { answerSelectedQuestionAndContinue } from 'modules/exam/actions'
import {
  selectedQuestion,
  selectedQuestionIndex as selectedQuestionIndexSelector,
  answers as answersSelector
} from 'modules/exam/selectors'

import Component from './Component'

export default connect(
  state => {
    const answers = answersSelector(state)
    const selectedQuestionIndex = selectedQuestionIndexSelector(state)
    return {
      question: selectedQuestion(state),
      selectedQuestionIndex,
      answer: answers[selectedQuestionIndex]
    }
  },
  { answerSelectedQuestionAndContinue }
)(Component)
