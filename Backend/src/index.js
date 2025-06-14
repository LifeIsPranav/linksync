const express = require('express')
const serverConfig = require('./config')

const app = express()
const PORT = serverConfig.PORT

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Initial Setup Successful')
})


app.listen(PORT, () => {
  console.log(`Backend Successfully Connected at: http://localhost:${PORT} 🔥`);
})