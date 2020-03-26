const express = require("express");
const routes = require("./routes");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); //  Configura o express para entender requisições em JSON (configurar antes das rotas)
app.use(routes);


app.listen(3333);


/*
*   MÉTODOS HTTP:
*
*       GET: Busca/lista informação no back-end
*       POST: Cria informação no back-end
*       PUT: Altera informação do back-end
*       DELETE: Deleta informação do back-end
*
*/

/*
*   TIPOS DE PARÂMETROS:
*
*       Query Params (?): parâmetros nomeados e enviados na rota após "?" (filtros, paginação) Ex: /users?aluno=Rafael
*       Route Params (:): Parâmetros utilizados para identificar recursos Ex: /users/:id
*       Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*
*/

/*
*   BANCO DE DADOS:
*
*       SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
*       NoSQL : MongoDB, CouchDb
*
*/

/*
*   MANIPULAÇÃO DE BANCO DE DADOS SQL:
*
*       Driver: SELECT * FROM users
*       
*       Query Builder: table('users'). select('*')... Ex: KnexJS
*   
*/



