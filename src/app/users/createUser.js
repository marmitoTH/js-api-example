const User = require('../../domain/User')
const AppError = require('../../infra/AppError')
const UsersRepository = require('../../infra/database/repositories/UsersRepository')

/**
 * Creates a new User on the database and returns its data.
 * @param {{
 *  name: string,
 *  email: string,
 *  password: string,
 *  phoneNumber: string
 * }} createUserDTO
 * @returns {Promise<User>}
 */
module.exports = async (createUserDTO) => {
  const repository = new UsersRepository()
  const isEmailInUse = await repository.findByEmail(createUserDTO.email)

  if (isEmailInUse) {
    throw new AppError(AppError.Errors.EmailInUseException)
  }

  return await repository.bootstrap(createUserDTO)
}
