import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonGroup } from 'reactstrap'
import { t } from 'i18n'

import {
  PERIOD_ALL,
  PERIOD_CURRENT,
  PERIOD_WEEK,
  PERIOD_WEEK3
} from 'modules/stats/constants'

export default class PeriodPicker extends Component {
  static propTypes = {
    period: PropTypes.string.isRequired,
    setPeriod: PropTypes.func.isRequired
  }
  setAll = () => this.props.setPeriod(PERIOD_ALL)
  setCurrent = () => this.props.setPeriod(PERIOD_CURRENT)
  setWeek = () => this.props.setPeriod(PERIOD_WEEK)
  setWeek3 = () => this.props.setPeriod(PERIOD_WEEK3)
  render() {
    const { period, setPeriod, ...rest } = this.props // eslint-disable-line no-unused-vars
    return (
      <ButtonGroup className="ml-1">
        <Button
          color="secondary"
          onClick={this.setAll}
          active={period === PERIOD_ALL}
        >
          {t('statistics.period.all')}
        </Button>
        <Button
          color="secondary"
          onClick={this.setCurrent}
          active={period === PERIOD_CURRENT}
        >
          {t('statistics.period.current')}
        </Button>
        <Button
          color="secondary"
          onClick={this.setWeek}
          active={period === PERIOD_WEEK}
        >
          {t('statistics.period.week')}
        </Button>
        <Button
          color="secondary"
          onClick={this.setWeek3}
          active={period === PERIOD_WEEK3}
        >
          {t('statistics.period.week3')}
        </Button>
      </ButtonGroup>
    )
  }
}
