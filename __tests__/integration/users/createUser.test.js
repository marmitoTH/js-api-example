const supertest = require('supertest')

const app = require('../../../src/interface/http/app')
const users = require('../../__data__/users.json')

const UsersRepository = require('../../../src/infra/database/repositories/UsersRepository')
const AppError = require('../../../src/infra/AppError')

const ROUTE = '/users'

describe('Create User Integration', () => {
  describe('when there are no users with same email', () => {
    it('returns status code 201 with user data without password in the body', async () => {
      const response = await supertest(app).post(ROUTE).send(users.valid[0])
      const expected = await new UsersRepository().findById(response.body.id)

      expect(response.status).toBe(201)
      expect(response.body.password).toBe(undefined)
      expect(response.body).toEqual(expected.toJSON())
    })
  })

  describe('when there are users with same email', () => {
    beforeEach(async () => {
      await new UsersRepository().bootstrap(users.valid[0])
    })

    it('returns status code 400 with error object in the body', async () => {
      const response = await supertest(app).post(ROUTE).send(users.valid[0])
      const expected = new AppError(AppError.Errors.EmailInUseException)

      expect(response.status).toBe(400)
      expect(response.body).toEqual(expected.toJSON())
    })
  })
})
