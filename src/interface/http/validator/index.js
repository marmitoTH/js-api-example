const AppError = require('../../../infra/AppError')

module.exports = async (schema, body) => {
  await schema.validate(body, { abortEarly: false }).catch((error) => {
    const schemaErrors = error.inner.map((err) => {
      return { field: err.path, message: err.message }
    })

    throw new AppError(AppError.Errors.ValidationException, schemaErrors)
  })
}
