const { request, response } = require('express')
const AppError = require('../../../infra/AppError')
const { Errors } = require('../../../infra/AppError')

/**
 * @param {AppError} error
 */
const getStatus = (error) => {
  switch (error.id) {
    case Errors.EmailInUseException:
      return 400
    case Errors.UserNotFoundException:
      return 404
    case Errors.UnknownError:
    default:
      return 500
  }
}

/**
 * @param {Error|AppError} error
 * @param {request} request
 * @param {response} response
 * @param {import('express').NextFunction} next
 */
module.exports = (error, request, response, next) => {
  if (error instanceof AppError) {
    const status = getStatus(error)
    return response.status(status).json(error)
  }

  return response.status(500).json({ message: 'Internal Server Error' })
}
