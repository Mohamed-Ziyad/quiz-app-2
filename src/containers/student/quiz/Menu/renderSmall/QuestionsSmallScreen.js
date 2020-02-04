import React from 'react'
import PropTypes from 'prop-types'
import { Spinner, Row, CardBody, CardImg, CardText, Button } from 'reactstrap'

import noImg from '../img/noImg.png'
// import trueImg from '../img/true.png'
// import falseImg from '../img/false.png'
// import falseSelectedImg from '../img/false_selected.png'
// import trueSelectedImg from '../img/true_selected.png'
// import Card from 'reactstrap/lib/Card'

const QuestionsSmallScreen = ({
  questionsList,
  handleNext,
  handlePrev,
  // warning,
  selector,
  loaded
}) => {
  const QuestionsList = questionsList
    .filter(question => question.id === selector)
    .map(question => (
      <CardBody key={question.id}>
        <Row>
          {question.image ? (
            <CardImg
              top
              height="200px"
              width="100%"
              src={`/img/${question.image}.jpg`}
            />
          ) : (
            <CardImg height="150px" width="100%" src={noImg} style={{}} />
          )}
        </Row>
        <br></br>
        <Row>
          <CardBody
            height="auto"
            width="100%"
            style={{
              background: '#e9ecef'
            }}
          >
            <CardText>
              {question.id}|{question.text}
            </CardText>
          </CardBody>
        </Row>

        <Row>
          <CardBody width="100%" className="text-center" style={{}}>
            <Button
              className="fa fa-chevron-left"
              style={{
                fontSize: '30px',
                background: 'white',
                float: 'left',
                border: 'none',
                color: 'black'
              }}
              onClick={handlePrev}
            ></Button>
            <Button
              className="fa fa-check-circle"
              style={{
                fontSize: '30px',
                background: 'white',
                border: 'none',
                color: 'black'
              }}
            ></Button>
            {'   '}
            <Button
              className="fa fa-times-circle"
              style={{
                fontSize: '30px',
                background: 'white',
                border: 'none',
                color: 'black'
              }}
            ></Button>
            <Button
              className="fa fa-chevron-right"
              style={{
                fontSize: '30px',
                background: 'white',
                float: 'right',
                border: 'none',
                color: 'black'
              }}
              onClick={handleNext}
            ></Button>
          </CardBody>
        </Row>
        <br></br>
        <Row>
          {/* warning === true ? (
            <Alert color="warning">
              This is a warning alert — check it out!
            </Alert>
          ) : (
            <Alert color="success">
              This is a success alert — check it out!
              {console.log(warning)}
            </Alert>
          ) */}
        </Row>
      </CardBody>
    ))
  return loaded === false ? (
    <CardBody width="100%">
      <Row>
        <Spinner
          style={{ width: '3rem', height: '3rem', marginLeft: '125px' }}
          type="grow"
          color="black"
        />
      </Row>
      <br />
      <br />
    </CardBody>
  ) : (
    <CardBody>{QuestionsList} </CardBody>
  )
}

QuestionsSmallScreen.propTypes = {
  questionsList: PropTypes.array,
  id: PropTypes.number,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  warning: PropTypes.bool,
  selector: PropTypes.number,
  loaded: PropTypes.bool
}

export default QuestionsSmallScreen
