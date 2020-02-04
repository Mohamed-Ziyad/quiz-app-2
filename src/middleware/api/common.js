import APIError from '../../errors/APIError'

const CONTENT_TYPE_APPLICATION_JSON = 'application/json'
const isApplicationJSON = contentType =>
  contentType.startsWith(CONTENT_TYPE_APPLICATION_JSON)

function isJSONResponse(response) {
  const contentType = response.headers.get('content-type')
  return isApplicationJSON(contentType)
}

export async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new APIError(response.status, response.statusText)
    if (isJSONResponse(response)) {
      const json = await response.json()
      error.response = json
      throw error
    } else {
      throw error
    }
  }
}

export async function parseJSON(response) {
  if (response.status !== 204) {
    if (isJSONResponse(response)) {
      return await response.json()
    } else {
      const contentType = response.headers.get('content-type')
      const text = await response.text()
      /* TEMPORARY FIX AUTH ISSUE */
      /* <FIX> */
      if (
        text ===
        "Forbidden. <a href='https://quiz.editricetoni.it/new/session_clean'>Logout</a>"
      ) {
        throw new APIError(401, 'Session expired...')
      }
      /* </FIX> */
      throw new APIError(
        response.status,
        `Server respond with unexpected content type: ${contentType}`
      )
    }
  }
}
