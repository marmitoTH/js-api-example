const createUser = require('../../../app/users/createUser')
const { request, response } = require('express')

class UsersController {
  /**
   * @param {request} req
   * @param {response} res
   */
  async create(req, res) {
    const user = await createUser(req.body)
    return res.status(201).json({ user })
  }
}

module.exports = UsersController
