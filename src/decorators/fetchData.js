import React, { Component } from 'react'
import PropTypes from 'prop-types'

export function wrapFetchData({ cDM = true, cDU = false } = {}) {
  return function wrapper(WrappedComponent) {
    class FetchingDataContainer extends Component {
      static propTypes = {
        fetchData: PropTypes.func.isRequired
      }
      componentDidMount() {
        if (cDM) {
          this.props.fetchData()
        }
      }
      componentDidUpdate() {
        if (cDU) {
          this.props.fetchData()
        }
      }
      render() {
        const { fetchData, ...props } = this.props // eslint-disable-line no-unused-vars
        return <WrappedComponent {...props} />
      }
    }
    return FetchingDataContainer
  }
}
