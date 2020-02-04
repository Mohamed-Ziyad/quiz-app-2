import React from 'react'
import PropTypes from 'prop-types'
import { Col, CardTitle } from 'reactstrap'

import colorTest from '../utils/colorTest'

const LargeAreas = ({ areas, setIndex }) => {
  const Areas = areas.map(area => (
    <CardTitle
      key={area.id}
      style={{
        backgroundColor: colorTest[area.id],
        padding: '25px',
        margin: '0 0 0 -30px',
        height: '110px',
        width: 'auto',
        cursor: 'pointer',
        color: '#fff',
        boxSizing: 'border-box'
      }}
      onClick={() => {
        setIndex(area.id)
      }}
    >
      {area.text}
    </CardTitle>
  ))

  return <Col sm="12">{Areas}</Col>
}
LargeAreas.propTypes = {
  areas: PropTypes.array,
  index: PropTypes.number,
  setIndex: PropTypes.func
}
export default LargeAreas
