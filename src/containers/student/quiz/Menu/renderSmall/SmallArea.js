import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Spinner, Card, CardTitle, CardBody, Collapse } from 'reactstrap'

import { SmallQuestions } from './index'
import colorTest from '../utils/colorTest'

const SmallArea = ({
  id,
  title,
  topics,
  index,
  setIndex,
  name,
  cRender,
  getQuestions
}) => {
  const [collapse, setCollapse] = useState(false)

  return (
    <Card key={name}>
      <CardTitle
        onMouseUp={() => setCollapse(!collapse)}
        onClick={() => {
          setIndex(id)
        }}
        style={{
          backgroundColor: colorTest[id],
          padding: '15px',
          margin: '-7px 0 0 0',
          height: '65px',
          width: 'auto',
          boxSizing: 'border-box',
          cursor: 'pointer'
        }}
        className="small-card-title"
      >
        {title}
      </CardTitle>
      <Collapse isOpen={id === index ? collapse : null}>
        <CardBody
          className="small-card-body"
          style={{ backgroundColor: colorTest[index] }}
        >
          {' '}
          {topics.map((topic, index) =>
            topic ? (
              <SmallQuestions
                cRender={cRender}
                key={index}
                text={topic.text}
                getQuestions={getQuestions}
              />
            ) : (
              <Spinner key={index} size="sm" type="grow" color="white" />
            )
          )}{' '}
        </CardBody>
      </Collapse>
    </Card>
  )
}

SmallArea.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  topics: PropTypes.array,
  index: PropTypes.number,
  setIndex: PropTypes.func,
  cRender: PropTypes.func,
  getQuestions: PropTypes.func
}

export default SmallArea
