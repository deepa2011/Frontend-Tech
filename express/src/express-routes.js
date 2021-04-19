const express = require('express')

const app = express()

// MEAN stack - MongoDB - database, Express - Server API, Angular - FrontEnd, Node - backend server I


const server = app.listen(3000, () => console.log('Server ready'))

app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  app.post('/', function (req, res) {
    res.send('Got a POST request')
  })

  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
  })

  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
  })