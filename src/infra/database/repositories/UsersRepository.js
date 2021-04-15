const { getRepository } = require('typeorm')
const User = require('../../../domain/User')

class UsersRepository {
  constructor() {
    this.repository = getRepository(User)
  }

  /**
   * @param {User} user
   * @returns {Promise<User>}
   */
  async bootstrap(user) {
    const newUser = this.repository.create(user)
    return this.repository.save(newUser)
  }

  /**
   * @param {string} email
   */
  async findByEmail(email) {
    return this.repository.findOne({ where: { email } })
  }
}

module.exports = UsersRepository
