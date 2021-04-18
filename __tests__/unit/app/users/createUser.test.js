const users = require('../../../__data__/users.json')
const createUser = require('../../../../src/app/users/createUser')
const UsersRepository = require('../../../../src/infra/database/repositories/UsersRepository')
const AppError = require('../../../../src/infra/AppError')

describe('Create User Unit', () => {
  describe('When there are no users with same email', () => {
    const userData = users.valid[0]

    it('creates a new user with hashed password and returns its data', async () => {
      const result = await createUser(userData)
      const expected = await new UsersRepository().findById(result.id)

      expect(result).toEqual(expected)
      expect(result.password).not.toBe(userData.password)
    })
  })

  describe('When there are users with same email', () => {
    const userData = users.valid[0]

    beforeEach(async () => {
      await new UsersRepository().bootstrap(userData)
    })

    it('throws AppError object with proper error id', async () => {
      const result = await createUser(userData).catch((error) => error)
      const error = new AppError(AppError.Errors.EmailInUseException)

      expect(result).toEqual(error)
    })
  })
})
