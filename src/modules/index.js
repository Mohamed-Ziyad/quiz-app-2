import { combineReducers } from 'redux'

import auth from './auth'
import exam from './exam/reducer'
import fetching from './fetching'
import stats from './stats/reducer'
import topic from './topic/reducer'
import category from './category/reducer'
import student from './student/reducer'
import questionsList from './questionsList/reducers'

export default combineReducers({
  auth,
  exam,
  fetching,
  stats,
  topic,
  category,
  student,
  questionsList
})
