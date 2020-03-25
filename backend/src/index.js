/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar / listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
 * Tipos de Parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação) 
 * Route params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc...
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333)