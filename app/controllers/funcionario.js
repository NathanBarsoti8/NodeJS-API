const { FuncionarioModel } = require('./../models')

class Funcionario {

    get(req, res) {
        FuncionarioModel.findAll({
            where: { STATUS: 1 }
        })
            .then((funcionario) => res.json(funcionario))
            .catch((error) => res.json(error))
    }

    getById(req, res) {
        FuncionarioModel.findOne({
            where: { 
                FUNCCOD: req.params.id
            } 
        })
            .then(funcionario => res.json(funcionario))
            .catch(error => res.json(error))
    }

    create(req, res) {
        FuncionarioModel.create(req.body)
            .then((funcionario) => res.json(funcionario))
            .catch((error) => res.json(error))
    }

    update(req, res) {
        FuncionarioModel.update(req.body, {
            where: {
                FUNCCOD: req.params.id,
                STATUS: 1
            }
        })
            .then(funcionario => res.json(funcionario))
            .catch(error => res.json(error))
    }
    delete(req, res) {
        FuncionarioModel.update({ STATUS: 0 }, {
            where: {
                FUNCCOD: req.params.id,
                STATUS: 1
            }
        })
            .then(funcionario => res.json(funcionario))
            .catch(error => res.json(error))
    }

}

module.exports = new Funcionario()