const express = require('express')
const route = express.Router()

const CursoController = require('./../controllers/curso')

route.get('/curso', CursoController.get)
route.get('/curso/:id', CursoController.getById)
route.post('/curso', CursoController.create)
route.put('/curso/:id', CursoController.update)
route.delete('/curso/:id', CursoController.delete)

module.exports = route