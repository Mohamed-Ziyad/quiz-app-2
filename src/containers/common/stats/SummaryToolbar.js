import React from 'react'

import { ButtonToolbar } from 'reactstrap'

import PeriodPickerButtonGroup from './PeriodPickerButtonGroup'

export default function SummaryToolbar() {
  return (
    <ButtonToolbar className="justify-content-end">
      <PeriodPickerButtonGroup />
    </ButtonToolbar>
  )
}
