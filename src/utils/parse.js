/**
 * By default browser interpret date "2019-08-03 10:55:02" like local time,
 * so we need to transform it to trully UTC format (2019-08-03T10:55:02Z)
 * @param  {String} ISOUTCString datetime string from backend
 * @return {Date}                parsed date
 */
export function parseISOUTCDateString(ISOUTCString) {
  // 2019-08-03 10:55:02
  const datePart = ISOUTCString.substring(0, 10)
  const timePart = ISOUTCString.substring(11, 19)
  // if someday backend begin respond with format like Date.prototype.toISOString()
  // this function will not be broken!
  return new Date(`${datePart}T${timePart}Z`)
}
