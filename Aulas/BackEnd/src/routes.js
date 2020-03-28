const express = require('express')
const OngController = require('./controllers/OngController')
const CasosController = require('./controllers/CasosController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions',SessionController.create)

routes.get('/ongs', OngController.listar)
routes.post('/ongs', OngController.create)
routes.delete('/ongs', OngController.delete)

routes.get('/profile', ProfileController.listar)

routes.get('/casos', CasosController.listar)
routes.post('/casos', CasosController.create)
routes.delete('/casos/:id', CasosController.delete)

module.exports = routes