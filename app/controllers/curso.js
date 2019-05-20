const { CursoModel } = require('./../models')

class Curso {

    get(req, res) {
        CursoModel.findAll({
            where: { STATUS: 1 }
        })
            .then((curso) => res.json(curso))
            .catch((error) => res.json(error))
    }

    getById(req, res) {
        CursoModel.findOne({
            where: { 
                CURSOCOD: req.params.id
            } 
        })
            .then(curso => res.json(curso))
            .catch(error => res.json(error))
    }

    create(req, res) {
        CursoModel.create(req.body)
            .then((curso) => res.json(curso))
            .catch((error) => res.json(error))
    }

    update(req, res) {
        CursoModel.update(req.body, {
            where: {
                CURSOCOD: req.params.id,
                STATUS: 1
            }
        })
            .then(curso => res.json(curso))
            .catch(error => res.json(error))
    }
    delete(req, res) {
        CursoModel.update({ STATUS: 0 }, {
            where: {
                CURSOCOD: req.params.id,
                STATUS: 1
            }
        })
            .then(curso => res.json(curso))
            .catch(error => res.json(error))
    }

}

module.exports = new Curso()