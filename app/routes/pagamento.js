const express = require('express')
const route = express.Router()

const PagamentoController = require('./../controllers/pagamento')

route.get('/pagamento', PagamentoController.get)
route.post('/pagamento', PagamentoController.create)

module.exports = route

