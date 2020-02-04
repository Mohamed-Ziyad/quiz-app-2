import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export function wrapEntityContext() {
  return WrappedComponent => {
    class EntityContext extends PureComponent {
      static propTypes = {
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        enterContext: PropTypes.func.isRequired,
        leaveContext: PropTypes.func.isRequired,
        fetchIfNecessary: PropTypes.func.isRequired
      }
      componentDidMount() {
        if (!this.props.id) {
          return
        }
        this.props.enterContext(this.props.id)
        this.props.fetchIfNecessary(this.props.id)
      }
      componentWillUnmount() {
        this.props.leaveContext()
      }
      render() {
        if (!this.props.id) {
          return null
        }
        return <WrappedComponent {...this.props} />
      }
    }
    return EntityContext
  }
}
