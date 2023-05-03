const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000
const ChefData =require('./data/ChefData.json');
app.use(cors());


// Chef Data for landing page 
app.get('/', (req, res) => {
  res.send(ChefData)
})

// Chef Details data for view details page

app.get('/chefDetails', (req, res) => {
  res.send(ChefData)
})


app.listen(port, () => {
  console.log(`ChefMafia is running on ${port}`)
})