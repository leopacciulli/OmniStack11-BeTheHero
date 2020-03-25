const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

//LOGIN
routes.post('/sessions', SessionController.create)

//LISTAGEM DE ONGS
routes.get('/ongs', OngController.index)
//CRIAÇÃO DA ONG
routes.post('/ongs', OngController.create)

//BUSCAR CASO ESPECIFICO DE UMA ONG
routes.get('/profile', ProfileController.index)

//LISTAGEM DE CASO
routes.get('/incidents', IncidentController.index)
//CRIAÇÃO DO CASO
routes.post('/incidents', IncidentController.create)
//DELETAR CASO
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes