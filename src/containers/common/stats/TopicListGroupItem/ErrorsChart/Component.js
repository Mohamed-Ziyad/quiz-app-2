import React from 'react'
import PropTypes from 'prop-types'

export default function ErrorsPieChartComponent({ count }) {
  if (count === -1) {
    return null
  }
  return (
    <svg className="pie-chart" viewBox="0 0 32 32">
      <circle className="bg" strokeDasharray="100 100" />
      <circle className="fg" strokeDasharray={`${100 - count} 100`} />
    </svg>
  )
}

ErrorsPieChartComponent.propTypes = {
  count: PropTypes.number.isRequired
}
