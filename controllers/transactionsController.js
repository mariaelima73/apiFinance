const db = require('../config/db'); //importa a conexão com o Banco de Dados

//Função para chamar todas as trasações
const getAllTrasactions = (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {
        if(err){
            console.error('Erro ao obter as transações', err);
            res.status(500).send('Erro ao obter as transações');
            return;
        }
        res.json(results);
    })
}

module.exports = {
    getAllTrasactions
}