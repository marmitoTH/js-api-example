const Yup = require('yup')

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  password: Yup.string().required()
})

module.exports = schema
