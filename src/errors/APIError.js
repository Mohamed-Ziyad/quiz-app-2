export default class APIError extends Error {
  constructor(status, description) {
    super(description)
    this.name = 'APIError'
    this.status = status
  }
}
