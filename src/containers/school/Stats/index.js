import { compose } from 'redux'
import { connect } from 'react-redux'

import { wrapFetchData } from 'decorators/fetchData'

import { fetchSchoolStats } from 'modules/stats/actions'
import {
  guestVisitsForCurrentPeriod,
  examsForCurrentPeriod,
  topics,
  students
} from 'modules/stats/selectors/school'

import Component from './Component'

export default compose(
  connect(
    state => ({
      guestVisits: guestVisitsForCurrentPeriod(state),
      exams: examsForCurrentPeriod(state),
      topics: topics(state),
      students: students(state)
    }),
    { fetchData: fetchSchoolStats }
  ),
  wrapFetchData()
)(Component)
