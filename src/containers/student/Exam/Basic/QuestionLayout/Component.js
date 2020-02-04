import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Row, Col } from 'reactstrap'

import imgTrue from './images/true.png'
import imgFalse from './images/false.png'
import imgTrueSelected from './images/true_selected.png'
import imgFalseSelected from './images/false_selected.png'

export default class QuestionLayoutComponent extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    answer: PropTypes.number,
    answerSelectedQuestionAndContinue: PropTypes.func.isRequired,
    selectedQuestionIndex: PropTypes.number.isRequired
  }
  toggleTrue = () => {
    const { answerSelectedQuestionAndContinue } = this.props
    answerSelectedQuestionAndContinue(1)
  }
  toggleFalse = () => {
    const { answerSelectedQuestionAndContinue } = this.props
    answerSelectedQuestionAndContinue(0)
  }
  render() {
    const {
      question: { image, text },
      answer,
      selectedQuestionIndex
    } = this.props
    return (
      <Row className="question-container mt-1 flex-grow-1" noGutters>
        <Col xs={12} md={3} className="pr-md-1">
          <div
            className="bg-white text-center image-container"
            style={
              image
                ? {
                    backgroundImage: `url(/img/${image}.jpg)`
                  }
                : undefined
            }
          />
        </Col>
        <Col xs={12} md={9} className="d-flex flex-column">
          <div className="bg-white flex-grow-1 p-1 d-flex flex-column">
            <div className="d-flex justify-content-end">
              Domanda numero
              <span className="px-1 ml-1 border border-success">
                {selectedQuestionIndex + 1}
              </span>
            </div>
            <div className="mt-1 p-1 border border-dark flex-grow-1">
              {text}
            </div>
          </div>
          <div className="d-flex bg-white mt-1 pt-1 pb-2 justify-content-center">
            <div className="d-flex answer-buttons-container justify-content-around">
              <div className="text-center">
                <div className="d-none d-md-block">Vero</div>
                <img
                  src={answer === 1 ? imgTrueSelected : imgTrue}
                  className="c-pointer"
                  alt="vero"
                  onClick={this.toggleTrue}
                />
              </div>
              <div className="text-center">
                <div className="d-none d-md-block">Falso</div>
                <img
                  src={answer === 0 ? imgFalseSelected : imgFalse}
                  className="c-pointer"
                  alt="falso"
                  onClick={this.toggleFalse}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}
