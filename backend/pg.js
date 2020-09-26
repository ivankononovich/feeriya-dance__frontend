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

server.get('/api/*', (req, res) => {
  client.query(
    `SELECT * FROM ${req.url.replace('/api/', '')}`,
    (pgReq, pgRes) => {
      res.json(pgRes.rows)
    },
  )
})
