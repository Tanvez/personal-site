const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// static file-serving middleware
app.use(express.static(path.join(__dirname, './public')))


// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found')
    err.status = 404
    next(err)
  } else {
    next()
  }
})

// sends index.html
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

// error handling endware
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send(err.message || 'Internal server error.')
})

app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))

module.exports = app

