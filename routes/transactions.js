const express = require('express'); //importa a framework express
const router = express.Router(); //cria um roteador
const transactionsController = require('../controllers/transactionsController'); //importa o controlador de transações

//Definir uma rota para obter todas as transações
router.get('./',transactionsController.getAllTrasactions);

//Exportar o roteador
module.exports = router;