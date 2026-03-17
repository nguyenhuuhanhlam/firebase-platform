const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({ message: 'Node.js backend running' })
})

app.listen(port, () => {
  console.log(`Node.js backend listening on http://localhost:${port}`)
})
