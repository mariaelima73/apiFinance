//Importando as bibliotecas
const express = require('express'); //importa o framework express
const dotenv = require('dotenv'); //importa o pacote dotenv para gerenciar variáveis de ambiente
const cors = require('cors'); //importa o pacote cors para permitir requisições de diferentes origens
const bodyParser = require('body-parser'); //importa o pacote body-parse para analisar o corpo das requisições http

//Configurar as variáveis de ambiente
dotenv.config(); //carrega as variáveis definidas no arquivo '.env' para process.env(processos)

//Inicializar nova aplicação Express
const app = express();

//Configurar o CORS e o body-parse
app.use(cors()); //habilita o cors para todas as rotas
app.use(bodyParser.json()); //configura o body-parser para analisar as requisições JSON

//Rota inicial para testar o servidor
app.get('/', (req, res) => { //req de require e res de response
    res.send("Servidor Online"); //definir uma rota para testar o servidor
});

//Configurar o servidor para uma porta específica
const PORT = process.env.PORT || 3000; //define a porta a partir da variável de ambiente ou usa a porta 5000 como porta padrão
app.listen(PORT,() =>{
    console.log(`Servidor online na porta ${PORT}`); //envia uma mensagem informando que o servidor está rodando na '$PORT' em que estiver no momento
});