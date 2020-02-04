import React, { Fragment } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import { Container } from 'reactstrap'

import Navigation from 'containers/common/Navigation'
import Footer from 'containers/common/Footer'

import Students from '../Students'
import SchoolStats from '../Stats'
import StudentStats from 'containers/student/Stats'

import NotFound from 'components/NotFound'

export default function SchoolCategoryLayout() {
  return (
    <Fragment>
      <Navigation />
      <Container fluid className="content mb-3 d-flex flex-column">
        <Switch>
          <Redirect from="/:category/" exact to="/:category/school/students" />
          <Route path="/:category/school/students" exact component={Students} />
          <Route path="/:category/school/stats" exact component={SchoolStats} />
          <Route path="/:category/stats/:studentId" component={StudentStats} />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </Fragment>
  )
}
