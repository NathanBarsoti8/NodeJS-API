//O arquivo de rotas é responsável por gerenciar todas as rotas da aplicação. Sendo assim, é ele quem redireciona a requisição vinda via http para o método desejado no controller.
//Para isso utilizamos o express, que contém uma função Router que faz o redirecionamento.
const express = require('express')
//Instanciando a função Router do express na constante route.
const route = express.Router()

//Importamos a instância do controller que está sendo exportada para que possamos fazer o redirecionamento correto.
const AlunoController = require('./../controllers/aluno')

//Acessamos a constante route informando qual método do protocolo ttp aquela requisição deve seguir. E quando bater uma requisição no método, ela acessará o controller no método informado e passará pela ógica implementada lá.
route.get('/aluno', AlunoController.get)
route.get('/aluno/:id', AlunoController.getById)
route.post('/aluno', AlunoController.create)
route.put('/aluno/:id', AlunoController.update)
route.delete('/aluno/:id', AlunoController.delete)

//Exportamos a constante route pois será necessário importar ela dentro do arquivo principal da nossa aplicação.
module.exports = route