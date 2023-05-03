const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const ChefData =require('./data/ChefData.json');


app.use(cors());
app.get('/', (req, res) => {
  res.send(ChefData)
})
app.get('/chefDetails', (req, res) => {
  res.send(ChefData)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})