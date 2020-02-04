import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'

import { USER_TYPE_STUDENT, USER_TYPE_SCHOOL } from 'modules/auth/constants'

import NotFound from 'components/NotFound'
import {
  Student as StudentCategoryLayout,
  School as SchoolCategoryLayout
} from './Category'

const LAYOUTS = {
  [USER_TYPE_STUDENT]: StudentCategoryLayout,
  [USER_TYPE_SCHOOL]: SchoolCategoryLayout
}

export default function Layout({ isAuthenticated, userType }) {
  if (!isAuthenticated) {
    return <Redirect to="/login" />
  }
  const CategoryLayout = LAYOUTS[userType] || null
  return (
    <section className="layout d-flex flex-column">
      <Switch>
        <Redirect from="/" exact to="/b" />
        <Route path="/:category(b)" component={CategoryLayout} />
        <Route component={NotFound} />
      </Switch>
    </section>
  )
}

Layout.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  userType: PropTypes.string
}
