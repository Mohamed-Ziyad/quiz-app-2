import React from 'react'
import PropTypes from 'prop-types'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer
} from 'recharts'
import { t } from 'i18n'
import history from 'config/history'

function renderTooltipContent({ active, payload, label }) {
  if (active && payload && payload.length) {
    const { payload: firstPayload, value } = payload[0]
    return (
      <div className="bg-secondary text-white p-2">
        <h5>{label}</h5>
        <div>Correct answered questions: {value}</div>
        <div>{firstPayload.start}</div>
      </div>
    )
  }
  return null
}

renderTooltipContent.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.object,
  label: PropTypes.any
}

function navigateToExamsStats(category, studentId) {
  history.push(`/${category}/stats/${studentId}/exams`)
}

export default function SummaryChart({
  data,
  category,
  studentId,
  examQuestionCount
}) {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          onClick={() => navigateToExamsStats(category, studentId)}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="attempt" />
          <YAxis type="number" domain={[0, examQuestionCount]} />
          <ReferenceLine y={36} stroke="red" />
          <Tooltip content={renderTooltipContent} />
          <Area
            type="monotone"
            dataKey="validAnswers"
            name={t('statistics.summaryChart.validAnswers')}
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

SummaryChart.propTypes = {
  data: PropTypes.array.isRequired,
  examQuestionCount: PropTypes.number.isRequired,
  category: PropTypes.string,
  studentId: PropTypes.string.isRequired
}
