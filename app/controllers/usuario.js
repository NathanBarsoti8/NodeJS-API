const { UsuarioModel } = require('./../models')

class Usuario {

    get(req, res) {
        UsuarioModel.findAll({
            where: { STATUS: 1 }
        })
            .then((usuario) => res.json(usuario))
            .catch((error) => res.json(error))
    }

    getById(req, res) {
        UsuarioModel.findOne({
            where: { 
                USUARIOCOD: req.params.id
            } 
        })
            .then(usuario => res.json(usuario))
            .catch(error => res.json(error))
    }

    create(req, res) {
        UsuarioModel.create(req.body)
            .then((usuario) => res.json(usuario))
            .catch((error) => res.json(error))
    }

    update(req, res) {
        UsuarioModel.update(req.body, {
            where: {
                USUARIOCOD: req.params.id,
                STATUS: 1
            }
        })
            .then(usuario => res.json(usuario))
            .catch(error => res.json(error))
    }
    delete(req, res) {
        UsuarioModel.update({ STATUS: 0 }, {
            where: {
                USUARIOCOD: req.params.id,
                STATUS: 1
            }
        })
            .then(usuario => res.json(usuario))
            .catch(error => res.json(error))
    }

}

module.exports = new Usuario()