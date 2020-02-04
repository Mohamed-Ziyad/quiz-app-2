import { connect } from 'react-redux'
import { compose } from 'redux'
import { wrapFetchData } from 'decorators/fetchData'

import Component from './Component'

import { fetchStudentList, editorCreate } from 'modules/student/actions'
import { list as students } from 'modules/student/selectors'

export default compose(
  connect(
    state => ({
      students: students(state)
    }),
    { fetchData: fetchStudentList, editorCreate }
  ),
  wrapFetchData()
)(Component)
