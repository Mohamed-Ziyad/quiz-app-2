import { connect } from 'react-redux'

import Component from './Component'

import { questionsById } from 'modules/exam/selectors'

const EMPTY_ARRAY = []
export default connect((state, ownProps) => ({
  questions: questionsById(state, ownProps.id) || EMPTY_ARRAY
}))(Component)
