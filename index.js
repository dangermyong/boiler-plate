const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://myong:jtdvf33K1WCzVxtE@cluster0.s5g2x.mongodb.net/shopping?retryWrites=true&w=majority'

mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})