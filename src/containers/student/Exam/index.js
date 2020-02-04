import { connect } from 'react-redux'
import { compose } from 'redux'
import { wrapFetchData } from 'decorators/fetchData'

import Component from './Component'
import './style.scss'

import { continueOrStartNewExam } from 'modules/exam/actions'
import { selectedItem, mode } from 'modules/exam/selectors'

export default compose(
  connect(
    state => ({
      exam: selectedItem(state),
      mode: mode(state)
    }),
    { fetchData: continueOrStartNewExam }
  ),
  wrapFetchData()
)(Component)
