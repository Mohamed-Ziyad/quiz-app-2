import { connect } from 'react-redux'
import { compose } from 'redux'
import { wrapFetchData } from 'decorators/fetchData'
import Component from './Component'

import { fetchStudentStats, fetchAllExamStats } from 'modules/stats/actions'

import './style.scss'

function fetchData(studentId) {
  return dispatch => {
    dispatch(fetchStudentStats(studentId))
    dispatch(fetchAllExamStats(studentId))
  }
}

export default compose(
  connect(
    null,
    { fetchData },
    (stateProps, dispatchProps, ownProps) => ({
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
      fetchData: () => dispatchProps.fetchData(ownProps.match.params.studentId)
    })
  ),
  wrapFetchData()
)(Component)
