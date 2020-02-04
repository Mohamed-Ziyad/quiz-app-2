import { connect } from 'react-redux'

import Component from './Component'

import { period as periodSelector } from 'modules/stats/selectors/common'
import { getErrorCount } from './utils'

function mapStateToProps(state, ownProps) {
  const { errors } = ownProps
  const period = periodSelector(state)
  return {
    count: getErrorCount(errors, period)
  }
}

export default connect(mapStateToProps)(Component)
