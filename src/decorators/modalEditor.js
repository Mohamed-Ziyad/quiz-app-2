import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal } from 'reactstrap'

export function wrapModalEditor() {
  return WrappedComponent => {
    class ModalEditor extends Component {
      static propTypes = {
        active: PropTypes.bool.isRequired,
        closeEditor: PropTypes.func.isRequired,
        modalProps: PropTypes.object
      }
      constructor(props) {
        super(props)
        this.state = { isOpen: false, opened: false }
      }
      static getDerivedStateFromProps(props, state) {
        if (props.active && !state.opened && !state.isOpen) {
          return {
            isOpen: true
          }
        } else if (!props.active && state.opened && state.isOpen) {
          return {
            isOpen: false
          }
        }
        return null
      }
      onOpened = () => this.setState({ opened: true })
      hideEditor = () => this.setState({ isOpen: false })
      onClosed = () => {
        this.setState({ opened: false })
        this.props.closeEditor()
      }
      render() {
        const { isOpen } = this.state
        const { modalProps, ...props } = this.props
        return (
          <Modal
            backdrop="static"
            size="lg"
            {...modalProps}
            isOpen={isOpen}
            toggle={this.hideEditor}
            onOpened={this.onOpened}
            onClosed={this.onClosed}
          >
            <WrappedComponent {...props} hideEditor={this.hideEditor} />
          </Modal>
        )
      }
    }
    return ModalEditor
  }
}
