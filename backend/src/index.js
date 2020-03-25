const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json()); /*- informa o tipo de formato para o express usar no request*/
app.use(routes);


app.listen(3333)
/** 
 * Rota / Recurso
 * 
 * Metodos HTTP:
 * 
 * GET: Buscar/Listar informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação do back-end
 * 
 * 
 * 
 * 
 * Tipos de parametros:  
 * 
 * Query Param: Parametros nomeados enviados na rota/link apos o "?" e geralmente servem para (Filtros, paginação) - request.query(
 * Route Param: Parametros utilizados para identificar recursos (utiliza os ":") - request.params
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos - request.body
 * 
 * 
 * 
 * 
 * Banco de dados:
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() - Usado
*/




