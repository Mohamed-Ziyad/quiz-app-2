import React from 'react'
import PropTypes from 'prop-types'

import { LinkContainer } from 'react-router-bootstrap'

import { USER_TYPE_STUDENT } from 'modules/auth/constants'

export default function FooterComponent({ user, category }) {
  const statsHref = user
    ? user.type === USER_TYPE_STUDENT
      ? `/${category}/stats/me`
      : `/${category}/school/stats`
    : ''
  return (
    <footer className="footer px-3 py-2 bg-dark text-white-50 d-flex justify-content-between">
      <div>© 2019 Copyright</div>
      <div>
        <LinkContainer to={statsHref}>
          <a href={statsHref} className="text-white-50">
            Statistics
          </a>
        </LinkContainer>
      </div>
    </footer>
  )
}

FooterComponent.propTypes = {
  user: PropTypes.object,
  category: PropTypes.string
}
