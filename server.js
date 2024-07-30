//Importando as Bibliotecas
const dotenv = require('dotenv'); //importa o pacote dotenv para gerenciar variáveis de ambiente
//Configurando as variáveis de ambiente
dotenv.config(); //carrega as variáveis definidas no arquivo .env para process.env
//Continuando a importação das bibliotecas
const express = require('express'); //importa o framework Express
const cors = require('cors'); //importa o pacote cors para permitir requisições de diferentes origens
const bodyParser = require('body-parser'); //importa o pacote body-parser para analisar o corpo das requisições HTTP

const db = require('./config/db'); //importa a conexão com o banco de dados

const transactionsRoutes = require('./routes/transactions'); //importa as rotas de transações

//Inicializando uma nova aplicação Express
const app = express();

//Configurando o CORS e o body-parser
app.use(cors()); //habilita o CORS para todas as rotas
app.use(bodyParser.json()); //configura o body-parser para analisar as requisições JSON

//Usar as rotas de transações para todas as requisições que começam com /api/transactions
app.use('/api/transactions', transactionsRoutes);

//Rota inicial para testar o servidor
app.get('/', (req, res) => { //req de require e res de response
    res.send('Servidor Online'); //define uma rota inicial para testar o servidor
});

//Configurando o servidor para escutar em uma porta específica
const PORT = process.env.PORT || 3000; //define a porta a partir da variável de ambiente ou usa a porta 3000 como padrão
app.listen(PORT, () =>{
    console.log(`Servidor online na porta ${PORT}`); //escreve uma mensagem informando que o servidor está rodando na '$PORT'
});