
const { PagamentoModel } = require('./../models')

class Pagamento {

    get(req, res) {
        PagamentoModel.findAll({
            where: { STATUS: 1 }
        })
            .then((pagamento) => res.json(pagamento))
            .catch((error) => res.json(error))
    }

    create(req, res) {
        PagamentoModel.create(req.body)
            .then((pagamento) => res.json(pagamento))
            .catch((error) => res.json(error))
    }

}

module.exports = new Pagamento()