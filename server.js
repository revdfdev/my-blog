/**
 * @Author: webcubic3
 * @Date:   2019-01-12T15:47:33+05:30
 * @Last modified by:   webcubic3
 * @Last modified time: 2019-01-12T16:13:07+05:30
 */
 const express = require('express')
 const next = require('next')

 const dev = process.env.NODE_ENV !== 'production'
 const app = next({ dev })
 const handle = app.getRequestHandler()

 app.prepare()
 .then(() => {
   const server = express()

   server.get('/portfolio/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id }
    app.render(req, res, actualPage, queryParams)
   })

   server.get('*', (req, res) => {
     return handle(req, res)
   })

   server.listen(3000, (err) => {
     if (err) throw err
     console.log('> Ready on http://localhost:3000')
   })
 })
 .catch((ex) => {
   console.error(ex.stack)
   process.exit(1)
 })
