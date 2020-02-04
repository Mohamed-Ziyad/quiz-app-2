import { Component } from 'react'
import PropTypes from 'prop-types'

import { duration } from 'utils/format'

export default class Coutdown extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      lastSeconds: this._getLastSeconds()
    }
  }
  componentDidMount() {
    this._refresh()
    this._initialTimeout = setTimeout(() => {
      this._refresh()
      this._interval = setInterval(this._refresh, 1000)
    }, 1000 - (Date.now() % 1000))
  }
  componentWillUnmount() {
    if (this._initialTimeout) {
      clearTimeout(this._initialTimeout)
      this._initialTimeout = null
    }
    if (this._interval) {
      clearInterval(this._interval)
      this._interval = null
    }
  }
  _getLastSeconds() {
    return Math.trunc((this.props.date.getTime() - Date.now()) / 1000)
  }
  _refresh = () => {
    this.setState({ lastSeconds: this._getLastSeconds() })
  }
  render() {
    const { lastSeconds } = this.state
    return duration(lastSeconds)
  }
}
