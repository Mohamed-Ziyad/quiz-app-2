import React from 'react'
import PropTypes from 'prop-types'
import { BreadcrumbItem } from 'reactstrap'
import { Route, Link } from 'react-router-dom'

export default function BreadcrumbRouterItem(props) {
  const { children, activeExact, ...routeProps } = props
  return (
    <Route
      {...routeProps}
      render={({ match }) => (
        <BreadcrumbItem
          tag={Link}
          active={match && (activeExact ? match.isExact : true)}
          to={match && match.url}
        >
          {children}
        </BreadcrumbItem>
      )}
    />
  )
}

BreadcrumbRouterItem.propTypes = {
  children: PropTypes.any,
  activeExact: PropTypes.bool
}
