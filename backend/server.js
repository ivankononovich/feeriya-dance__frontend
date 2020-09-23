const express = require('express')
const bodyParser = require('body-parser')
const { parse } = require('url')
const next = require('next')
const client = require('./pg')

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.use(bodyParser.json())

  server.post('/api/add-categories', (req, res) => {
    const { nameRU, nameEN, subcategories } = req.body

    client.query(
      `INSERT INTO categories (name_ru, name_en, subcategories) VALUES (${nameRU}, ${nameEN}, ${
        subcategories.length ? subcategories.join(',') : '{}'
      });`,
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
  server.get('*', (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)

    handle(req, res, parsedUrl)
  })

  server.listen(process.env.PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.PORT}`)
  })
})
