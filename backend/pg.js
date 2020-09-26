const { Client } = require('pg')
const bodyParser = require('body-parser')
const server = require('./server')

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})
client.connect()

server.use(bodyParser.json())
server.post('/api/add-categories', (req, res, next) => {
  const { name_ru, name_en, subcategories } = req.body

  client.query(
    `INSERT INTO categories (name_ru, name_en, subcategories) VALUES ($1, $2, $3);`,
    [name_ru, name_en, subcategories],
    () => {
      if (err) {
        return next(err)
      }
      res.send(200)
    },
  )
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
server.get('/api/categories', (req, res) => {
  client.query(`SELECT * FROM categories`, (pgReq, pgRes) => {
    res.json(pgRes.rows)
  })
})
