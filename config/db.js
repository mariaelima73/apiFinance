//Importação da biblioteca mysql2 e criar a conexão com o banco de dados
const mysql = require('mysql2'); //importa o pacote mysql2 para conectar ao banco de dados

const db = mysql.createConnection({
    host:process.env.DB_HOST, //endereço do servidor de banco de dados
    user:process.env.DB_USER, //nome de usuário para acessar o banco de dados
    password:process.env.DB_PASS, //senha do usuário para acessar o banco de dados
    database:process.env.DB_NAME //nome do banco de dados
});

db.connect((err) => {
    if(err){
        console.log('Erro ao conectar o Banco de Dados.', err); //exibe uma mensagem de erro
    return;
    }
    console.log(`Conectado ao Banco de Dados Mysql ${process.env.DB_NAME}`); //exibe uma mensagem de sucesso
});

module.exports=db; //exporta a conexão para ser usada em outros arquivos