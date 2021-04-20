const { request, response } = require('express')
const validator = require('../validator')
const createUserSchema = require('../validator/users/createUserSchema')
const createUser = require('../../../app/users/createUser')

class UsersController {
  /**
   * @param {request} req
   * @param {response} res
   */
  async create(req, res) {
    await validator(createUserSchema, req.body)
    const user = await createUser(req.body)
    return res.status(201).json(user)
  }
}

module.exports = UsersController
