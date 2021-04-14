class User {
  /**
   * Creates a new User
   * @param {string} id
   * @param {string} name
   * @param {string} email
   * @param {string} password
   * @param {string} phoneNumber
   * @param {Date} createdAt
   * @param {Date} updatedAt
   */
  constructor(id, name, email, password, phoneNumber, createdAt, updatedAt) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.phoneNumber = phoneNumber
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}

module.exports = User
