const bcrypt = require('bcrypt')

class Password {
  /** @param {String} password */
  static async hash(password) {
    return await bcrypt.hash(password, 8)
  }
}

module.exports = Password
