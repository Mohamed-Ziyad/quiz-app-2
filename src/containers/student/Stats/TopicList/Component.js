import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { t } from 'i18n'

import { Row, Col, ListGroup } from 'reactstrap'

import SummaryToolbar from 'containers/common/stats/SummaryToolbar'
import SummaryChart from './SummaryChart'
import TopicItem from './TopicItem'

export default function TopicListComponent({ topics, match }) {
  return (
    <Fragment>
      <h4>{t('statistics.topicList.header')}</h4>
      <Row>
        <Col xs={{ order: 2 }} sm={{ size: 6, order: 1 }}>
          <ListGroup>
            {topics.map(topic => (
              <TopicItem
                key={topic.id}
                {...topic}
                studentId={match.params.studentId}
              />
            ))}
          </ListGroup>
        </Col>
        <Col xs={{ order: 1 }} sm={{ size: 6, order: 2 }}>
          <SummaryToolbar />
          <SummaryChart studentId={match.params.studentId} />
        </Col>
      </Row>
    </Fragment>
  )
}

TopicListComponent.propTypes = {
  topics: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
}
