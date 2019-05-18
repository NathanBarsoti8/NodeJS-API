//Importações necessárias para o funcionamento total da API
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser'); // request vem e ele converte o corpo da requisição já para JSON
const port = process.env.PORT || 3000

//O cors é responsável por permitir que páginas web de outros dominios acessem seus recursos. Sem o uso do cors, o acesso a api permanece bloqueado.
app.use(cors())

//Importando as rotas implementadas no outro arquivo para que possam ser usadas no arquivo principal do servidor.
const AlunoRoute = require('./app/routes/aluno')


//CONFIG bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //codificar as URL
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }))

//Configurando acesso a rota get para testar o funcionamento da API.
app.get('/', function (req, res) {
    res.send("API Funcionando")
})

//Nesta linha, dizemos para o express que queremos utilizar o dominio '/' para acessar as rotas de aluno definidas no outro arquivo. A requisição cai aqui e entra no arquivo route para que dali tome seu caminho correto e possa retornar a quem fez requisição.
app.use('/', AlunoRoute)

app.use('/', FuncionarioRoute)


app.listen(port, function () {
    console.log(`API LISTEN ON PORT ${port}`)
})


module.exports = app;