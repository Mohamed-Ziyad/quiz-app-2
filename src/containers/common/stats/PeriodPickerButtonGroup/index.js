import { connect } from 'react-redux'
import Component from './Component'

import { setPeriod } from 'modules/stats/actions'
import { period } from 'modules/stats/selectors/common'

export default connect(
  state => ({
    period: period(state)
  }),
  { setPeriod }
)(Component)
