import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Row, Col, Card, CardText } from 'reactstrap'

import { LargeQuestions, LargeAreas } from './index'
import colorTest from '../utils/colorTest'

const LargeCard = ({ areas, category, Render, getQuestions }) => {
  let [index, setIndex] = useState(1)
  const status = false

  const cRender = () => {
    Render(status)
  }

  return (
    <Card
      style={{
        overflow: 'hidden'
      }}
    >
      <CardText
        style={{ textTransform: 'Uppercase' }}
        onClick={() => cRender()} //  remove this
      >
        Category:{category}
      </CardText>
      <Row
        style={{
          backgroundColor: colorTest[index]
        }}
      >
        <Col xs="4">
          <LargeAreas areas={areas} index={index} setIndex={setIndex} />
        </Col>
        <Col xs="8">
          <TransitionGroup>
            <CSSTransition
              in={true}
              appear={false}
              key={index}
              timeout={{
                exit: 1000
              }}
              classNames="slide"
            >
              <LargeQuestions
                areas={areas}
                index={index}
                setIndex={setIndex}
                cRender={cRender}
                getQuestions={getQuestions}
              />
            </CSSTransition>
          </TransitionGroup>
        </Col>
      </Row>
    </Card>
  )
}

LargeCard.propTypes = {
  areas: PropTypes.array,
  category: PropTypes.string,
  Render: PropTypes.func,
  getQuestions: PropTypes.func
}
export default LargeCard
