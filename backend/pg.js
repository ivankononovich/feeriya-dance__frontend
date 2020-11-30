const { Client } = require('pg')
const bodyParser = require('body-parser')
const server = require('./server')
const categoriesAdd = require('./categories/add')
const categoriesRemove = require('./categories/remove')

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})
client.connect()

server.use(bodyParser.json())
;[categoriesAdd, categoriesRemove].forEach(({ type, url, cb }) => {
  server[type](url, (...rest) => cb(client, ...rest))
})

server.get('/api/categories', (req, res) => {
  client.query(`SELECT * FROM categories`, (pgReq, pgRes) => {
    res.json(pgRes.rows)
  })
})

server.get('/api/products', (req, res) => {
  client.query(`SELECT * FROM products`, (pgReq, pgRes) => {
    res.json(pgRes.rows)
  })
})

server.get('/api/contacts', (req, res) => {
  client.query(`SELECT * FROM contacts`, (pgReq, pgRes) => {
    res.json(pgRes.rows)
  })
})

server.post('/api/admin', (req, res) => {
  client.query(`SELECT * FROM admin`, (pgReq, pgRes) => {
    let result = 'user is NOT admin'

    pgRes.rows.forEach((user) => {
      if (
        user.email === req.body.email &&
        user.password === req.body.password
      ) {
        result = 'user is admin'
      }
    })
    res.json(result)
  })
})
