const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))


app.get('/message', async function (req, res) {
  res.send(secret)
})

const port = 2000
app.listen(port, function () {
  console.log(`running on port ${port}`)
})