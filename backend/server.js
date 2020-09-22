const express = require('express')
const { parse } = require('url')
const next = require('next')
const client = require('./pg')

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.get('api/content', (req, res) => {})
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
