//O arquivo controllers é responsável por gerir e executar os métodos da aplicação utilizando o sequelize para isso.
//É necessário importar o modelo da tabela que se quer trabalhar os métodos.
//O AlunoModel possuí a instância do sequelize, que conhece as operações do banco de dados, assim como possui qual é a estrutura de dados que está sendo utilizada no banco de dados.
//Necessário importar o modelo para o controller para que possamos trabalhar os métodos.
const { AlunoModel } = require('./../models')

//Inicia-se uma classe que será responsável por conter todos os métodos presentes neste controller.
class Aluno {

    //Os métodos contém dois parametros. O parametro req e o parametro res. São correspondentes as operações request e response do protocolo http.
    get(req, res) {
        //Como o modelo possui a instância do sequelize que contém as querys do banco de dados, apenas necessário acessar o modelo e especificar qual será a função utilizada.
        AlunoModel.findAll({
            where: { STATUS: 1 }
        })
        //Caso tenhamos obtido resultado, setamos o resultado em um parametro e o enviamos por response via http
            .then((aluno) => res.json(aluno))
            //Caso tenhamos algum erro, setamos o resultado em um parametro e o enviamos por response via http
            .catch((error) => res.json(error))
    }

    getById(req, res) {
        AlunoModel.findOne({
            where: { 
                ALUNOCOD: req.params.id
            } 
        })
            .then(aluno => res.json(aluno))
            .catch(error => res.json(error))
    }

    create(req, res) {
        AlunoModel.create(req.body)
            .then((aluno) => res.json(aluno))
            .catch((error) => res.json(error))
    }

    update(req, res) {
        AlunoModel.update(req.body, {
            where: {
                ALUNOCOD: req.params.id,
                STATUS: 1
            }
        })
            .then(aluno => res.json(aluno))
            .catch(error => res.json(error))
    }
    delete(req, res) {
        AlunoModel.update({ STATUS: 0 }, {
            where: {
                ALUNOCOD: req.params.id,
                STATUS: 1
            }
        })
            .then(aluno => res.json(aluno))
            .catch(error => res.json(error))
    }

}

//Necessário exportar a classe instanciada pois ela será acessada pelo arquivo de rotas.
module.exports = new Aluno()