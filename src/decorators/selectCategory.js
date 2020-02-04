import React, { Component } from 'react'
import PropTypes from 'prop-types'

export function wrapSelectCategory() {
  return WrappedComponent => {
    return class SelectCategoryComponent extends Component {
      static propTypes = {
        match: PropTypes.object.isRequired,
        selectCategory: PropTypes.func.isRequired
      }
      componentDidMount() {
        this.props.selectCategory(this.props.match.params.category)
      }
      componentDidUpdate(prevProps) {
        if (
          prevProps.match.params.category !== this.props.match.params.category
        ) {
          this.props.selectCategory(this.props.match.params.category)
        }
      }
      render() {
        const { selectCategory, ...props } = this.props // eslint-disable-line no-unused-vars
        return <WrappedComponent {...props} />
      }
    }
  }
}
