const express = require('express')

const app = express()

// MEAN stack - MongoDB - database, Express - Server API, Angular - FrontEnd, Node - backend server I

app.get('/', (req, res) => {
  res.send('Hi!')
})

app.post('/', (req, res) => {
  res.send('Hi! I am Post')
})

app.get('/hello', (req, res) => {
  res.send('Hello!')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})