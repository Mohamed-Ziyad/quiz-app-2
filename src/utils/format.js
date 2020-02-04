import itLocale from 'date-fns/locale/it'
import { format } from 'date-fns'

/**
 * By default browser interpret date "2019-08-03 10:55:02" like local time,
 * so we need to transform it to trully UTC format (2019-08-03T10:55:02Z)
 * @param  {String} ISOUTCString datetime string from backend
 * @return {Date}                parsed date
 */
function parseISOUTCDateString(ISOUTCString) {
  // 2019-08-03 10:55:02
  const datePart = ISOUTCString.substring(0, 10)
  const timePart = ISOUTCString.substring(11, 19)
  // if someday backend begin respond with format like Date.prototype.toISOString()
  // this function will not be broken!
  return new Date(`${datePart}T${timePart}Z`)
}

export function datetimeIT(ISOUTCString) {
  const date = parseISOUTCDateString(ISOUTCString)
  return format(date, 'D MMMM YYYY HH:mm', { locale: itLocale })
}

function padLeadZero(n) {
  return n > 9 ? `${n}` : `0${n}`
}

export function duration(durationSeconds) {
  if (durationSeconds < 0) {
    return '-' + duration(-durationSeconds)
  }
  const seconds = durationSeconds % 60
  const minutes = Math.trunc(durationSeconds / 60)
  return `${padLeadZero(minutes)}:${padLeadZero(seconds)}`
}
