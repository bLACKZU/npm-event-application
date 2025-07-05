const express = require('express')
const app = express()
app.use(express.json())

const dataStore = [] // 👈 holds submitted objects

app.post('/data', (req, res) => {
  console.log('Request received at /data')
  console.log('Request body:', req.body)
  dataStore.push(req.body)
  console.log('Current dataStore:', dataStore)
  res.json({ status: 'success', received: req.body })
})

app.get('/data', (req, res) => {
  res.json(dataStore)
})

// routing path
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000')
})
