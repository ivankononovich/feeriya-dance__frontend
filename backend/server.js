const express = require('express')
const { parse } = require('url')
const next = require('next')

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)

    handle(req, res, parsedUrl)
  })

  server.listen(process.env.PORT, (err) => {
    if (err) throw err
  })
})

module.exports = server
