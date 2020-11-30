const express = require('express')
const { parse } = require('url')
const next = require('next')

const jwt = require('jsonwebtoken')
const jwtSecret = 'mysuperdupersecret' // Use env for secrets

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  // server.get('*', (req, res) => {
  //   // Be sure to pass `true` as the second argument to `url.parse`.
  //   // This tells it to parse the query portion of the URL.
  //   const parsedUrl = parse(req.url, true)

  //   handle(req, res, parsedUrl)
  // })
  server.get('*', (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)

    handle(req, res, parsedUrl)
  })

  // // Auth middleware
  // server.use((req, res, next) => {
  //   // login does not require jwt verification
  //   if (req.path == '/api/login') {
  //     // next middleware
  //     return next()
  //   }

  //   // get token from request header Authorization
  //   const token = req.headers.authorization

  //   // Token verification
  //   try {
  //     var decoded = jwt.verify(token, jwtSecret);
  //     console.log("decoded", decoded)
  //   } catch (err) {
  //     // Catch the JWT Expired or Invalid errors
  //     return res.status(401).json({ "msg": err.message })
  //   }

  //   // next middleware
  //   next()
  // });

  // // Routes
  // app.get("/api/login", (req, res) => {
  //   // generate a constant token, no need to be fancy here
  //   const token = jwt.sign({ "username": "Mike" }, jwtSecret, { expiresIn: 60 }) // 1 min token
  //   // return it back
  //   res.json({ "token": token })
  // });

  // app.get("/api/token/ping", (req, res) => {
  //   // Middleware will already catch if token is invalid
  //   // so if he can get this far, that means token is valid
  //   res.json({ "msg": "all good mate" })
  // })

  // app.get("/api/ping", (req, res) => {
  //   // random endpoint so that the client can call something
  //   res.json({ "msg": "pong" })
  // });

  server.listen(process.env.PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.PORT}`)
  })
})

module.exports = server
