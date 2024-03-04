const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/teste', (req, res) => res.send('OK'))
app.listen(3000, () => console.log('Server running on port 3000'))
