const db = require('../config/db'); //importa a conexão com o Banco de Dados

//Função para chamar todas as trasações
const getAllTransactions = (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {
        if(err){
            console.error('Erro ao obter as transações', err);
            res.status(500).send('Erro ao obter as transações');
            return;
        }
        res.json(results);
    });
};

//Função para adicionar uma nova transação
const addTransaction = (req, res) => {
    const {date, amount, description, category, account, user_id} = req.body;
    db.query(
        'INSERT INTO transactions (date, amount, description, category, account, user_id) VALUES (?,?,?,?,?,?)',
        [date, amount, description, category, account, user_id],
        (err, results) => {
            if(err){
                console.error('Erro ao adicionar a transação', err);
                res.status(500).send('Erro ao adicionar a transação');
                return;
            }
        res.status(201).send('Transação adicionada!');
        }
    );
};

module.exports = {
    getAllTransactions,
    addTransaction
};