import React, { Fragment } from 'react'

import { Switch, Route } from 'react-router-dom'

import { Container } from 'reactstrap'

import Navigation from 'containers/common/Navigation'
import Footer from 'containers/common/Footer'

import NotFound from 'components/NotFound'
import Welcome from '../Welcome'
import Stats from '../Stats'
import QuizMenu from '../quiz/Menu'
import Exam from '../Exam'

function ExamLayout() {
  return (
    <Container fluid className="content pt-3 pb-3 d-flex flex-column">
      <Exam />
    </Container>
  )
}

function CategoryLayout() {
  return (
    <Fragment>
      <Navigation />
      <Container fluid className="content mb-3 d-flex flex-column">
        <Switch>
          <Route path="/:category/" exact component={Welcome} />
          <Route path="/:category/stats/:studentId" component={Stats} />
          <Route
            path="/:category/quiz/menu/single"
            exact
            component={QuizMenu}
          />
          <Route component={NotFound} />
        </Switch>
      </Container>
      <Footer />
    </Fragment>
  )
}

export default function StudentCategoryLayout() {
  return (
    <Switch>
      <Route path="/:category/exam" exact component={ExamLayout} />
      <Route path="/:category/" component={CategoryLayout} />
      <Route component={NotFound} />
    </Switch>
  )
}
