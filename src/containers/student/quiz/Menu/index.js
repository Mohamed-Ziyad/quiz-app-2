import { connect } from 'react-redux'
import { compose } from 'redux'
import { wrapFetchData } from 'decorators/fetchData'
import {
  fetchquestionList,
  updateStatus,
  refreshStatus
} from 'modules/questionsList/actions'

import { fetchTopicList } from 'modules/topic/actions'
import { areasWithTopics } from 'modules/area/selectors'
import { current as currentCategory } from 'modules/category/selectors'

import Component from './Component'

export default compose(
  connect(
    state => ({
      areas: areasWithTopics(state),
      category: currentCategory(state),
      questionsList: state.questionsList.questionsList,
      loaded: state.questionsList.loaded,
      status: state.questionsList.status
    }),
    {
      fetchData: fetchTopicList,
      fetchquestionsList: fetchquestionList,
      updateStatus: updateStatus,
      refreshStatus: refreshStatus
    }
  ),
  wrapFetchData()
)(Component)
