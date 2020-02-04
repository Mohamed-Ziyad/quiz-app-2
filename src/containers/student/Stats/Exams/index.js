import { connect } from 'react-redux'

import { exams } from './selectors'

import Component from './Component'

export default connect(state => ({
  exams: exams(state)
}))(Component)
