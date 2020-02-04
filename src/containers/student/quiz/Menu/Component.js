import React, { Component } from 'react'
import PropTypes from 'prop-types'

import LargeCard from './renderLarge/LargeCard'
import SmallCard from './renderSmall/SmallCard'

import SmallQuestionsCard from './renderSmall/SmallQuestionsCard'
import LargeQuestionsCard from './renderLarge/LargeQuestionsCard'
import { Jumbotron } from 'reactstrap'

import './custom.css'

class QuizMenu extends Component {
  static propTypes = {
    areas: PropTypes.array.isRequired,
    category: PropTypes.string,
    fetchquestionsList: PropTypes.func,
    refreshStatus: PropTypes.func,
    status: PropTypes.array,
    updateStatus: PropTypes.func,
    questionsList: PropTypes.array,
    loaded: PropTypes.bool
  }

  constructor(props) {
    super(props)

    this.state = {
      Index: 1,
      display: false,
      visibility: false,
      selector: 1,
      toipicId: 0,
      Render: false,
      questionListLargeRender: false,
      answerTrue: false,
      answerFalse: false,
      title: '',
      isDesktop: false,
      questionDisplay: 'none',
      displayContent: '',
      isActive: false,
      activeIndex: 0
    }

    this.updatePredicate = this.updatePredicate.bind(this)
  }
  componentDidMount() {
    this.updatePredicate()
    window.addEventListener('resize', this.updatePredicate)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate)
  }
  Render = status => this.setState({ Render: !status })

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth < 415 })
  }

  handleIndex(index) {
    this.setState({
      index: index,
      display: true,
      visibility: true
    })
  }
  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  handleOnclickFetch = () => {
    const { selector } = this.state
    this.props.fetchquestionsList(selector)
    this.props.refreshStatus()
  }
  handlePanelClose() {
    this.props.refreshStatus()
    this.setState({
      questionListPanel: false,
      selector: 1,
      answerTrue: false,
      answerFalse: false,
      start: false,
      title: ''
    })
  }

  toggleQuestionListSmallRender = () => {
    this.setState({ questionListSmallRender: true })
  }

  handleAnswerFalseClick() {
    this.setState({
      answerFalse: true
    })
    this.props.status.length === 41 - 1
      ? this.setState({ warning: 'stop here' })
      : this.props.updateStatus(this.state.selector, 'false')
  }
  handleAnswerTrueClick() {
    this.setState({
      answerTrue: true
    })
    this.props.status.length === 41 - 1
      ? this.setState({ warning: 'stop hgetQuestionsere' })
      : this.props.updateStatus(this.state.selector, 'true')
  }

  render() {
    const {
      areas,
      category,
      questionsList,
      fetchquestionsList,
      loaded
    } = this.props
    const { isDesktop } = this.state

    let k = 1
    questionsList.map(n => {
      return (n.id = k++)
    })

    return isDesktop ? (
      this.state.Render ? (
        <Jumbotron fluid>
          <SmallQuestionsCard
            questionsList={questionsList}
            Render={this.Render}
            loaded={loaded}
          />
        </Jumbotron>
      ) : (
        <Jumbotron fluid>
          <SmallCard
            areas={areas}
            category={category}
            Render={this.Render}
            getQuestions={fetchquestionsList}
          />
        </Jumbotron>
      )
    ) : this.state.Render ? (
      <Jumbotron fluid>
        <LargeQuestionsCard
          questionsList={questionsList}
          Render={this.Render}
          loaded={loaded}
        />
      </Jumbotron>
    ) : (
      <Jumbotron fluid>
        <LargeCard
          areas={areas}
          category={category}
          Render={this.Render}
          getQuestions={fetchquestionsList}
        />
      </Jumbotron>
    )
  }
}

export default QuizMenu
