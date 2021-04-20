const localization = require('../interface/localization')

const Errors = {
  UnknownError: 0,
  EmailInUseException: 1,
  UserNotFoundException: 2,
  ValidationException: 3
}

class AppError {
  /**
   * @param {number} error
   * @param {Array<String>} messages
   */
  constructor(error = 0, messages = undefined) {
    this.id = error
    this.type = Object.keys(Errors)[error]
    this.description = localization.__(`errors.${this.type}`)
    this.messages = messages
  }

  toJSON() {
    return {
      type: this.type,
      description: this.description,
      messages: this.messages
    }
  }
}

module.exports = AppError
module.exports.Errors = Errors
