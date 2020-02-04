import React from 'react'
import { Switch, Route } from 'react-router-dom'

import StatsBreadcrumbs from 'containers/common/stats/Breadcrumbs'

import TopicList from './TopicList'
import TopicSingle from './TopicSingle'
import Exams from './Exams'
import ExamSingle from './Exams/Single'

export default function StudentStats() {
  return (
    <div className="student-stats-container">
      <StatsBreadcrumbs />
      <Switch>
        <Route path="/:category/stats/:studentId" exact component={TopicList} />
        <Route
          path="/:category/stats/:studentId/topic/:id"
          exact
          component={TopicSingle}
        />
        <Route
          path="/:category/stats/:studentId/exams"
          exact
          component={Exams}
        />
        <Route
          path="/:category/stats/:studentId/exams/:id"
          exact
          component={ExamSingle}
        />
      </Switch>
    </div>
  )
}
