import { connect } from 'react-redux'

import Component from './Component'

import { topics } from 'modules/stats/selectors/student'

export default connect(state => ({ topics: topics(state) }))(Component)
