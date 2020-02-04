import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { t } from 'i18n'

import { ListGroup } from 'reactstrap'
import TopicListGroupItem from 'containers/common/stats/TopicListGroupItem'
import StudentListGroupItem from './StudentListGroupItem'

function TopicsComponent({ topics }) {
  return (
    <ListGroup>
      {topics.map(topic => (
        <TopicListGroupItem key={topic.id} {...topic} />
      ))}
    </ListGroup>
  )
}
TopicsComponent.propTypes = {
  topics: PropTypes.array.isRequired
}

function StudentsComponent({ students }) {
  return (
    <ListGroup>
      {students.map(student => (
        <StudentListGroupItem key={student.id} {...student} />
      ))}
    </ListGroup>
  )
}

StudentsComponent.propTypes = {
  students: PropTypes.array.isRequired
}

export default function SchoolStatisticsComponent({
  guestVisits,
  exams,
  topics,
  students
}) {
  const { best: bestStudents, worst: worstStudents } = students
  return (
    <Fragment>
      <div>
        {t('school.stats.guestVisits')}: {guestVisits}
      </div>
      <div>
        {t('school.stats.exams')}: {exams}
      </div>
      <div>
        {t('school.stats.bestStudents')}
        <StudentsComponent students={bestStudents} />
      </div>
      <div>
        {t('school.stats.worstStudents')}
        <StudentsComponent students={worstStudents} />
      </div>
      <div>
        {t('school.stats.topics')}
        <TopicsComponent topics={topics} />
      </div>
    </Fragment>
  )
}

SchoolStatisticsComponent.propTypes = {
  guestVisits: PropTypes.number.isRequired,
  exams: PropTypes.number.isRequired,
  topics: PropTypes.array.isRequired,
  students: PropTypes.object.isRequired
}
