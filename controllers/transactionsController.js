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
                console.error('Erro ao adicionar a transação.', err);
                res.status(500).send('Erro ao adicionar a transação.');
                return;
            }
        //validação
        res.status(201).send('Transação adicionada!');
        }
    );
};

//Função para atualizar uma transação existente (substituição completa)
const updateTransactionTotal = (req, res) => {
    const{id} = req.params;
    const{date, amount, description, category, account, user_id} = req.body;
    db.query(
        'UPDATE transactions SET date = ?, amount = ?, description = ?, category = ?, account = ?, user_id = ? WHERE id = ?',
        [date, amount, description, category, account, user_id, id],
        (err, results) => {
            if(err){
                console.error('Erro ao atualizar a transação.', err);
                res.status(500).send('Erro ao atualizar a transação.');
                return;
            }
        //validação
        res.send('Transação atualizada!');
        }
    );
};

//Função para atualizar uma transação existente (substituição parcial)
const updateTransactionParcial = (req, res) => {
    const{id} = req.params;
    const fields = req.body;
    const query = [];
    const values = [];
    for(const[key,value] of Object.entries(fields)) {
        query.push(`${key} = ?`);
        values.push(value);
    }
    values.push(id);
    db.query(
        `UPDATE transactions SET ${query.join(',')} WHERE id = ?`,
        values,
        (err, results) => {
            if(err){
                console.error('Erro ao atualizar a transação.', err);
                res.status(500).send('Erro ao atualizar a transação.');
                return;
            }
        res.send('Transação atualizada!');
        }
    );
};

//Função para deletar uma transação existente
const deleteTransaction = (req, res) => {
const{id} = req.params;
    db.query(
        `DELETE FROM transactions WHERE id = ?`, [id],
        (err, results) => {
            if(err){
                console.error('Erro ao deletar a transação.', err);
                res.status(500).send('Erro ao deletar a transação.');
                return;
            }
        res.send('Transação deletada!');
        }
    );
};


module.exports = {
    getAllTransactions,
    addTransaction,
    updateTransactionTotal,
    updateTransactionParcial,
    deleteTransaction
};