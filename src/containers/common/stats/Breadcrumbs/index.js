import { connect } from 'react-redux'

import { topic, student } from 'modules/stats/selectors/student'
import { selectedItem as exam } from 'modules/exam/selectors'
import { user } from 'modules/auth/selectors'

import Component from './Component'

export default connect(state => ({
  topic: topic(state),
  exam: exam(state),
  user: user(state),
  student: student(state)
}))(Component)
