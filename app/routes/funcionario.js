const express = require('express')
const route = express.Router()

const FuncionarioController = require('./../controllers/funcionario')

route.get('/funcionario', FuncionarioController.get)
route.get('/funcionario/:id', FuncionarioController.getById)
route.post('/funcionario', FuncionarioController.create)
route.put('/funcionario/:id', FuncionarioController.update)
route.delete('/funcionario/:id', FuncionarioController.delete)

module.exports = route