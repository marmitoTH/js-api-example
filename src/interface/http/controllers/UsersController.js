const createUser = require('../../../app/users/createUser')

class UsersController {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  async create(req, res) {
    const user = await createUser(req.body)
    return res.status(201).json({ user })
  }
}

module.exports = UsersController
