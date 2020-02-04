import { connect } from 'react-redux'
import { compose } from 'redux'
import { wrapEntityContext } from 'decorators/entityContext'

import Component from './Component'

import { errors } from 'modules/topic/selectors'
import { fetchTopicErrors, select } from 'modules/topic/actions'
import { anyFetching } from 'modules/fetching/selectors'

const enterContext = id => select(id)
const leaveContext = () => select(null)

export default compose(
  connect(
    (state, ownProps) => ({
      id: +ownProps.match.params.id,
      errors: errors(state),
      fetching: anyFetching(state)
    }),
    { enterContext, leaveContext, fetchIfNecessary: fetchTopicErrors },
    (stateProps, dispatchProps, ownProps) => ({
      ...stateProps,
      ...dispatchProps,
      ...ownProps,
      fetchIfNecessary: topicId =>
        dispatchProps.fetchIfNecessary(ownProps.match.params.studentId, topicId)
    })
  ),
  wrapEntityContext()
)(Component)
