const { getRepository } = require('typeorm')
const User = require('../../../domain/User')

class UsersRepository {
  constructor() {
    this.repository = getRepository(User)
  }

  /**
   * @param {Omit<UserModel, 'id' | 'createdAt' | 'updatedAt'>} user
   * @returns {Promise<User>}
   */
  async bootstrap(user) {
    const newUser = this.repository.create(user)
    return this.repository.save(newUser)
  }
}

module.exports = UsersRepository
