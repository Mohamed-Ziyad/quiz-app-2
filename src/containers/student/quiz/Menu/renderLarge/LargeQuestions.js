import React from 'react'
import PropTypes from 'prop-types'
import { Spinner, CardText, CardBody } from 'reactstrap'
import colorTest from '../utils/colorTest'

const LargeQuestions = ({ areas, index, cRender, getQuestions }) => {
  const topicID = '1'
  const Questions = () => {
    getQuestions(topicID)
  }

  const LargeScreenQuestions = areas
    .filter(area => area.id === index)
    .map(area => (
      <CardBody key={area.name}>
        {index === area.id
          ? area.topics.map((topic, index) =>
              topic ? (
                <CardText
                  width="auto"
                  style={{
                    margin: '0'
                  }}
                  key={index}
                  onMouseUp={() => Questions()}
                  onClick={() => cRender()}
                >
                  {topic.text}
                </CardText>
              ) : (
                <Spinner key={index} size="sm" type="grow" color="white" />
              )
            )
          : null}
      </CardBody>
    ))

  return (
    <CardBody
      style={{
        position: 'absolute',
        top: '0',
        height: '100%',
        width: '100%',
        marginTop: '2px',
        backgroundColor: colorTest[index],
        padding: '0',
        color: '#fff'
      }}
    >
      {LargeScreenQuestions}
      {`${index} from question`}
    </CardBody>
  )
}

LargeQuestions.propTypes = {
  areas: PropTypes.array,
  cRender: PropTypes.func,
  index: PropTypes.number,
  getQuestions: PropTypes.func
}

export default LargeQuestions
