import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, CardText } from 'reactstrap'
import { SmallArea } from './index'

const SmallCard = ({ areas, category, Render, getQuestions }) => {
  let [index, setIndex] = useState(1)
  const status = false

  const cRender = () => {
    Render(status)
  }
  return (
    <Card>
      <CardText
        style={{ textTransform: 'Uppercase' }}
        onClick={() => cRender()} // remove this
      >
        Category:{category}
      </CardText>

      <Row>
        <Col xs="auto">
          {areas.map(area => (
            <SmallArea
              key={area.name}
              area={area}
              title={area.text}
              id={area.id}
              topics={area.topics}
              index={index}
              setIndex={setIndex}
              cRender={cRender}
              getQuestions={getQuestions}
            />
          ))}
        </Col>
      </Row>
    </Card>
  )
}
SmallCard.propTypes = {
  areas: PropTypes.array,
  category: PropTypes.string,
  Render: PropTypes.func,
  getQuestions: PropTypes.func
}
export default SmallCard
