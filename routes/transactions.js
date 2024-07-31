const express = require('express'); //importa a framework express
const router = express.Router(); //cria um roteador
const transactionsController = require('../controllers/transactionsController'); //importa o controlador de transações

//Definir uma rota para obter todas as transações
router.get('/',transactionsController.getAllTransactions);

//Definir uma rota para adicionar uma nova transação
router.post('/', transactionsController.addTransaction);

//Definir uma rota para atualizar uma transação existente (substituição completa)
router.put('/:id', transactionsController.updateTransactionTotal);

//Definir uma rota para atualizar uma transação existente (substituição parcial)
router.patch('/:id', transactionsController.updateTransactionParcial);

//Exportar o roteador
module.exports = router;