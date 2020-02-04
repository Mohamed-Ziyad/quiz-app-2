import { connect } from 'react-redux'

import Component from './Component'

import { toggleExplanation } from 'modules/exam/actions'
import { explanationEnabled } from 'modules/exam/selectors'

export default connect(
  state => ({
    explanationEnabled: explanationEnabled(state)
  }),
  { toggleExplanation }
)(Component)
