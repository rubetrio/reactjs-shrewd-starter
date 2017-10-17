const express = require('express')
const path = require('path')
const port = process.env.PORT || 8000
const app = express()
const compression = require('compression')

// serve static assets normally
app.use(compression())
app.use(express.static(__dirname + '/public'))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("Server started @ http://localhost:8000/")
