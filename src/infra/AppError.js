const localization = require('../interface/localization')

const Errors = {
  UnknownError: 0,
  EmailInUseException: 1,
  UserNotFoundException: 2
}

class AppError {
  constructor(error = 0) {
    this.id = error
    this.type = Object.keys(Errors)[error]
    this.message = localization.__(`errors.${this.type}`)
  }
}

module.exports = AppError
module.exports.Errors = Errors
