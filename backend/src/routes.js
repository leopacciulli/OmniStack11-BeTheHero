const { celebrate, Segments, Joi } = require('celebrate')

const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

//LOGIN
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}), SessionController.create)

//LISTAGEM DE ONGS
routes.get('/ongs', OngController.index)

//CRIAÇÃO DA ONG
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(), 
        email: Joi.string().required().email(), 
        whatsapp: Joi.string().required().min(10), 
        city: Joi.string().required(), 
        uf: Joi.string().required().length(2)
    })
}), OngController.create)

//BUSCAR CASO ESPECIFICO DE UMA ONG
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index)

//LISTAGEM DE CASO
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index)

//CRIAÇÃO DO CASO
routes.post('/incidents', IncidentController.create)

//DELETAR CASO
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete)

module.exports = routes