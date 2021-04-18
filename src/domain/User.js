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

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      createdAt: this.createdAt.toJSON(),
      updatedAt: this.updatedAt.toJSON()
    }
  }
}

module.exports = User
