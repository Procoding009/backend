require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/index', (req,res)=>{
    res.send("Hello world first time to write backend")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})