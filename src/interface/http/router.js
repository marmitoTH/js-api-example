const { Router } = require('express')

const UsersController = require('./controllers/UsersController')

const router = Router()

const usersController = new UsersController()

router.route('/users').post(usersController.create)

module.exports = router
