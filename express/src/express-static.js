const express = require('express')

const app = express()


const server = app.listen(3000, () => console.log('Server ready'))

app.use(express.static('public'))

// http://localhost:3000/abc.txt

// app.use('/static', express.static('public'))
// http://localhost:3000/static/abc.txt
