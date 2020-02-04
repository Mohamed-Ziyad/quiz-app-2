import React from 'react'
import PropTypes from 'prop-types'
import { CardText } from 'reactstrap'

const SmallQuestions = ({ text, cRender, getQuestions }) => {
  const topicID = '1'
  const Questions = () => {
    getQuestions(topicID)
  }

  return (
    <CardText
      className="small-card-text"
      onClick={() => cRender()}
      onMouseUp={() => Questions()}
      // onClick={() =>
      // this.setState({
      //   toipicId: topic.id,
      // title: topic.text,
      // questionListSmallRender: true
      // })
      // }
      // onMouseUp={this.handleOnclickFetch}
    >
      {text}
    </CardText>
  )
}

SmallQuestions.propTypes = {
  text: PropTypes.string,
  cRender: PropTypes.func,
  getQuestions: PropTypes.func
}

export default SmallQuestions
