require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const obj = {
    name: 'Abhi',
    age: 20,
    city: 'Shangarh'
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/abhiinfo', (req, res) => {
  res.json(obj)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})